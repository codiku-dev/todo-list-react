import { TaskListItem } from "../TaskListItem/TaskListItem";

export function TaskList({ taskList, onClickItem, onClickItemTrash }) {
  return taskList.map((task) => {
    return <TaskListItem key={task.id} task={task} onClick={onClickItem} onClickTrash={onClickItemTrash} />;
  });
}
