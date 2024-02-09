"use client";

import { HiMenuAlt1, HiX } from "react-icons/hi";
import style from "./Menu.module.scss";
import headerstyle from "./header.module.scss";
import userstyle from "./userBar.module.scss";
import { useEffect, useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton =
    typeof document !== "undefined"
      ? document?.getElementById("menuButton")
      : null;
  const btnCls = menuButton?.classList.value;
  const navList =
    typeof document !== "undefined"
      ? document.getElementsByClassName(`${headerstyle.navList}`)[0]
      : null;
  const userBarWrapper =
    typeof document !== "undefined"
      ? document.getElementsByClassName(`${userstyle.userBarWrapper}`)[0]
      : null;

  return (
    <>
      <button
        id="menuButton"
        onClick={() => {
          menuButton?.classList.toggle(`${style.menuButtonActive}`);
          navList?.classList.toggle(`${headerstyle.navListActive}`);
          userBarWrapper?.classList.toggle(`${userstyle.userBarWrapperActive}`);
          setIsOpen(!isOpen);
          document.body?.classList.toggle("hidden");
        }}
        className={style.menuButton}
      >
        <HiMenuAlt1 size={20} className={style.menuIcon} />
        <HiX size={20} className={style.closeIcon} />
      </button>
      {isOpen && <div className={style.menuWrapper}></div>}
    </>
  );
};

export default Menu;
