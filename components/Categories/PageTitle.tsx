import style from "./PageTitle.module.scss";

const PageTitle = ({
  firstPartName,
  lastPartName,
}: {
  firstPartName: string;
  lastPartName: string;
}) => {
  return (
    <h2 className={style.pageTitle}>
      {firstPartName}
      <span>{lastPartName}</span>
    </h2>
  );
};

export default PageTitle;
