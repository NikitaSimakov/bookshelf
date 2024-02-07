"use client";

import { HiMenuAlt1, HiX } from "react-icons/hi";
import style from "./Menu.module.scss";
// import { useEffect } from "react";

const Menu = () => {
  const menuButton =
    typeof document !== "undefined"
      ? document?.getElementById("menuButton")
      : null;
  // useEffect(() => {
  //   console.log(menuButton?.classList.value === `${style.menuButtonActive}`);
  // }, [menuButton]);
  return (
    <>
      <button
        id="menuButton"
        onClick={() =>
          menuButton?.classList.toggle(`${style.menuButtonActive}`)
        }
        className={style.menuButton}
      >
        <HiMenuAlt1 size={20} className={style.menuIcon} />
        <HiX size={20} className={style.closeIcon} />
      </button>
    </>
  );
};

export default Menu;
