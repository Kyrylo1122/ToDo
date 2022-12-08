import styles from "./index.module.scss";
import { useToDoStore } from "../../data/Stores/useToDoStore";
import React from "react";
import { InputPlus } from "../Components/InputPlus";
import { InputTask } from "../Components/InputTask";
import { NoTasksPage } from "../Components/InputTask/NoTasksPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask, clearAll] = useToDoStore(
    (state) => [
      state.tasks,
      state.createTask,
      state.updateTask,
      state.removeTask,
      state.clearAll,
    ]
  );

  return (
    <div className={styles.container}>
      <ToastContainer />

      <h1 className={styles.title}>Todo App</h1>
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
        {!tasks.length && <NoTasksPage />}
        {tasks.length ? (
          <button
            className={`btn ${styles.clearAll__btn}`}
            type="button"
            onClick={() => clearAll()}
          >
            Clear all tasks
          </button>
        ) : null}

        <ul className={styles.list}>
          {tasks.map(({ id, title }) => (
            <li key={id} className={styles.item}>
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
