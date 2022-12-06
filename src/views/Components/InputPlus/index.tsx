import React, { useCallback, useState } from "react";
import styles from "./index.module.scss";
interface InputPlusProps {
  onAdd: (title: string) => void;
}
export const InputPlus: React.FC<InputPlusProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue("");
  }, [inputValue]);

  return (
    <>
      <input
        className={styles.inputPlusValue}
        type="text"
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        onKeyDown={(evt) => {
          if (evt.code === "Enter") {
            addTask();
          }
        }}
        placeholder="Type here..."
      />
      <button
        type="button"
        className={styles.inputPlusButton}
        onClick={addTask}
      >
        Add Task
      </button>
    </>
  );
};
