import styles from "./index.module.scss";
import { useToDoStore } from "../../data/Stores/useToDoStore";
import React from "react";
import { InputPlus } from "../Components/InputPlus";
import { InputTask } from "../Components/InputTask";
export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ToDo App</h1>
      <section className={styles.sections}>
        <InputPlus
          onAdd={(task: string) => {
            if (task) {
              createTask(task);
            }
          }}
        />
      </section>
      <hr />
      <section className={styles.sections}>
        {!tasks.length && <p>There is not tasks</p>}
        <ul>
          {tasks.map(({ id, title }) => (
            <li key={id}>
              <InputTask
                id={id}
                title={title}
                onEdited={updateTask}
                onRemoved={removeTask}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
