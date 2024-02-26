import { Card } from "../Card/Card";

export const CardList = ({ userList, onClickCard }) => {
  return (
    <>
      {userList.map((user) => {
        return <Card key={user.id} user={user} onClick={onClickCard} />;
      })}
    </>
  );
};
