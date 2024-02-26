import { FaTrashAlt } from "react-icons/fa";
import s from "./TaskListItem.module.css";

export function TaskListItem({ task, onClick, onClickTrash }) {
  function onClick_() {
    onClick(task);
  }

  function onClickTrash_(event) {
    event.stopPropagation();
    onClickTrash(task);
  }

  return (
    <div className={s.root} onClick={onClick_}>
      <span className={`${s.taskTitle} ${task.isCompleted && s.completedTask}`}>{task.title}</span>
      <FaTrashAlt className={s.trash} onClick={onClickTrash_} />
    </div>
  );
}
