import React, { useCallback, useState } from "react";
import styles from "./index.module.scss";

import { BsPlusLg } from "react-icons/bs";
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
    <div className={styles.inputPlus}>
      <input
        className={styles.inputPlus__input}
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
      <button type="button" className={styles.inputPlus__btn} onClick={addTask}>
        <BsPlusLg />
      </button>
    </div>
  );
};
