import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

interface InputTaskProps {
  id: string;
  title: string;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}
export const InputTask: React.FC<InputTaskProps> = ({
  id,
  title,
  onEdited,
  onRemoved,
}) => {
  const [checked, setChecked] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [value, setValue] = useState(title);
  const editTitleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editTitle) {
      editTitleInputRef?.current?.focus();
    }
  }, [editTitle]);
  return (
    <div className={styles.inputTask}>
      {editTitle ? (
        <>
          <input
            onChange={(event) => {
              setValue(event?.target?.value);
            }}
            ref={editTitleInputRef}
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                onEdited(id, value);

                setEditTitle(false);
              }
            }}
            value={value}
          />
        </>
      ) : (
        <label className={styles.inputTask__label}>
          <input
            type="checkbox"
            className="visually-hidden"
            onChange={() => {
              setChecked((state) => !state);
            }}
          />
          {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
          <span className={checked ? `${styles.inputTask__checked}` : ""}>
            {title}
          </span>
        </label>
      )}

      <div>
        {editTitle ? (
          <button
            type="button"
            onClick={() => {
              onEdited(id, value);
              setEditTitle(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            className={styles.inputTask__btn}
            onClick={() => {
              setEditTitle(true);
            }}
          >
            Edit
          </button>
        )}

        <button
          type="button"
          className={styles.inputTask__btn}
          onClick={() => {
            onRemoved(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
