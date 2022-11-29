import React from "react";
import styles from "./index.module.scss";
import { useToDoStore } from "../../data/Stores/useToDoStore";
export const App: React.FC = () => {
  console.log(useToDoStore);
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);
  createTask("jkjl");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ToDo App</h1>
      <section className={styles.sections}></section>
      <hr />
      <section className={styles.sections}></section>
    </div>
  );
};
