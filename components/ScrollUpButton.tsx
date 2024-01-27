"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import style from "./ScrollUpButton.module.scss";

const ScrollUpButton = () => {
  const isBrowser = typeof window !== "undefined";
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const scrollToTop = () => {
    if (!isBrowser) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {scroll > document.documentElement.clientHeight && (
        <button className={style.scrollUpButton} onClick={scrollToTop}>
          <IoIosArrowDown className={style.scrollUpButtonIcon} />
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
