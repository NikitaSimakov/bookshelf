"use client";
import { useEffect, useState } from "react";
import style from "./ThemeToggleBtn.module.scss";

const ThemeToggleBtn = () => {
  const [thema, setThema] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("thema", JSON.stringify(thema));
    thema
      ? (document.body.dataset.theme = "dark")
      : (document.body.dataset.theme = "light");
  }, [thema]);
  useEffect(() => {
    const localThema = JSON.parse(localStorage.getItem("thema")!);
    localThema && setThema(localThema);
  }, []);
  return (
    <div className={style.toggleContainer}>
      <label htmlFor="check">
        <input
          type="checkbox"
          className={style.toggleInput}
          id="check"
          onChange={() => setThema(!thema)}
          checked={thema}
        />
        <div className={style.toggleWrapper}></div>
      </label>
    </div>
  );
};

export default ThemeToggleBtn;

{
  /* // <div className={style.toggleContainer}>
    //   <input
        // type="checkbox"
        // id="check"
        // className={style.toggle}
        // onChange={() => setThema(!thema)}
        // checked={thema}
    //   />
    //   <label htmlFor="check"></label>
    // </div> */
}
