import style from "./LeftBar.module.scss";

const LeftBar = ({ children }: { children: React.ReactNode }) => (
  <div className={style.leftBar}>{children}</div>
);

export default LeftBar;
