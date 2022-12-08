import create from "zustand";
import { generateId } from "../helpers";
import { devtools, persist } from "zustand/middleware";
import { toast } from "react-toastify";

interface Task {
  id: string;
  title: string;
  createdAt: number;
}
interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
  clearAll: () => void;
}

export const useToDoStore = create<ToDoStore>()(
  devtools(
    persist(
      (set, get) => ({
        tasks: [],
        createTask: (title) => {
          if (!title.trim().length) {
            toast("The field cannot be empty");
            return;
          }
          const { tasks } = get();
          const newTask: Task = {
            id: generateId(),
            title,
            createdAt: Date.now(),
          };
          set({ tasks: [newTask, ...tasks] });
        },
        updateTask: (id: string, title: string) => {
          const { tasks } = get();
          set({
            tasks: tasks.map((task) => ({
              ...task,
              title: task.id === id ? title : task.title,
            })),
          });
        },
        removeTask: (id: string) => {
          const { tasks } = get();
          set({ tasks: tasks.filter((task) => task.id !== id) });
        },
        clearAll: () => {
          set({ tasks: [] });
        },
      }),
      { name: "tasks-storage" }
    ),
    { enabled: false }
  )
);
