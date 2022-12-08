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
            className={styles.inputTask__input}
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
          <div>
            {checked ? (
              <ImCheckboxChecked size="1.5rem" />
            ) : (
              <ImCheckboxUnchecked size="1.5rem" />
            )}
          </div>
          <span
            className={`${styles.inputTask__span} ${
              checked ? `${styles.inputTask__checked}` : ""
            }`}
          >
            {title}
          </span>
        </label>
      )}

      <div className={styles.inputTask__btn__container}>
        {editTitle ? (
          <button
            type="button"
            className="btn"
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
            className="btn"
            onClick={() => {
              setEditTitle(true);
            }}
          >
            Edit
          </button>
        )}

        <button
          type="button"
          className="btn"
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
