import style from "./SceletonCardInfo.module.scss";

const SceletonCardInfo = () => {
  return (
    <div className={style.cardInfoContainer}>
      <div className={style.cardInfoWrapper}>
        <div className={style.cardInfoImage}></div>
      </div>
      <div className={style.descriptionWrapper}>
        <div className={style.title}></div>
        <div className={style.author}></div>
        <div className={style.description}></div>
      </div>
      <div className={style.shoppingButton}></div>
    </div>
  );
};

export default SceletonCardInfo;
