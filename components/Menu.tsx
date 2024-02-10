"use client";

import { HiMenuAlt1, HiX } from "react-icons/hi";
import style from "./Menu.module.scss";
import headerstyle from "./header.module.scss";
import userstyle from "./userBar.module.scss";
import { useEffect, useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menuButton = document?.getElementById("menuButton");
    const navList = document.getElementsByClassName(
      `${headerstyle.navList}`
    )[0];
    const userBarWrapper = document.getElementsByClassName(
      `${userstyle.userBarWrapper}`
    )[0];
    const addClassname = () => {
      menuButton?.classList.add(`${style.menuButtonActive}`);
      navList?.classList.add(`${headerstyle.navListActive}`);
      userBarWrapper?.classList.add(`${userstyle.userBarWrapperActive}`);
      document.body?.classList.add("hidden");
    };
    const removeClassname = () => {
      menuButton?.classList.remove(`${style.menuButtonActive}`);
      navList?.classList.remove(`${headerstyle.navListActive}`);
      userBarWrapper?.classList.remove(`${userstyle.userBarWrapperActive}`);
      document.body?.classList.remove("hidden");
    };

    if (isOpen) addClassname();
    if (!isOpen) removeClassname();
  }, [isOpen]);

  return (
    <>
      <button id="menuButton" className={style.menuButton}>
        {isOpen ? (
          <HiX
            onClick={() => {
              setIsOpen(false);
            }}
            size={20}
            className={style.closeIcon}
          />
        ) : (
          <HiMenuAlt1
            onClick={() => {
              setIsOpen(true);
            }}
            size={20}
            className={style.menuIcon}
          />
        )}
      </button>
      {isOpen && <div className={style.menuWrapper}></div>}
    </>
  );
};

export default Menu;
