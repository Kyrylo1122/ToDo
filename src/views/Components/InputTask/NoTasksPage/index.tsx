import { BiTask } from "react-icons/bi";
import style from "./index.module.scss";
export const NoTasksPage = () => {
  return (
    <div className={style.noTasksPage}>
      <p className={style.noTasksPage__text}>
        Let's write a new task for today
      </p>
      <BiTask size="1.5rem" />
    </div>
  );
};
