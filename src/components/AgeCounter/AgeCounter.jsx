import { useState } from "react";

export function AgeCounter() {
  const [age, setAge] = useState(30);
  console.log(age);
  const incrementAge = () => {
    setAge(age + 1);
  };
  return (
    <div>
      <button onClick={incrementAge}>Augmenter</button>
      <div>Tu as {age} ans</div>
    </div>
  );
}
