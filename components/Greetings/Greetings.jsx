import s from "./Greetings.module.css";

export const Greetings = ({ firstname, lastname, age, fruits }) => {
  const renderFruits = () => {
    return fruits.map((fruit, index) => {
      return <li key={index}>{fruit}</li>;
    });
  };

  return (
    <div className={s.maClass}>
      Salut {firstname} ton nom de famille c'est {lastname}
      <ul>{age > 18 && renderFruits()}</ul>
    </div>
  );
};
