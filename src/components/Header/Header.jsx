import listSvg from "../../assets/list.svg";
import s from "./Header.module.css";
export function Header() {
  return (
    <div className={s.header}>
      <img src={listSvg} alt="List icon" className={s.imgHeader} />
      <h1>Todo List</h1>
    </div>
  );
}
