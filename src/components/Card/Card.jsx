import s from "./Card.module.css";
export function Card({ user, onClick }) {
  const handleOnClick = () => {
    onClick(user);
  };

  const renderMusic = () => {
    <>
      <h5>Favorite music</h5>
      <p>Song : {user.music.song}</p>
      <p>Singer : {user.music.singer}</p>
    </>;
  };
  return (
    <div onClick={handleOnClick} className={`${s.root}`} style={{ border: user.isPremium ? "solid 3px gold" : "" }}>
      <div className={s.cardBody}>
        <img src={user.avatar} className={s.avatar} />
        <div className={s.infoSection}>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <h5>Email</h5>
          <p>{user.email}</p>
          <h5>Nationality</h5>
          <p>{user.nationality}</p>
          {user.music?.song && user.music.singer && renderMusic()}
        </div>
      </div>
    </div>
  );
}
