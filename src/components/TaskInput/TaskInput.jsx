import { useState } from "react";

export const TaskInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleClick = () => {
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <div className="input-group">
      <input
        value={inputValue}
        type="text"
        className="form-control"
        onChange={handleChange}
        placeholder="Add a new task"
      />
      <button onClick={handleClick} className="btn btn-outline-secondary" type="button">
        Add Task
      </button>
    </div>
  );
};
