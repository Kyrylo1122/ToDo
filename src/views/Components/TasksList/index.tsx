import React, { useCallback, useState } from "react";
import styles from "./index.module.scss";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
interface TasksListProps {
  id: string;
  title: string;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}
export const TasksList: React.FC<TasksListProps> = ({
  id,
  title,
  onEdited,
  onRemoved,
}: TasksListProps) => {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <div
        className={styles.tasksListCheckbox}
        onClick={() => {
          setChecked((state) => !state);
        }}
      >
        {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </div>
      <h3>{title}</h3>

      <button type="button" className={styles.taskListBtn} onClick={() => {}}>
        Edit
      </button>
      <button type="button" className={styles.taskListBtn} onClick={() => {}}>
        Delete
      </button>
    </>
  );
};
