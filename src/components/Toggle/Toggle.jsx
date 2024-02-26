import { useState } from "react";

export const Toggle = ({ onClickButton }) => {
  const [isOn, setIsOn] = useState(true);

  const toggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onClickButton(newValue);
  };
  return (
    <div>
      <button style={{ backgroundColor: isOn ? "blue" : "gray" }} onClick={toggle}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};
