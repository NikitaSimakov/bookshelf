"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import style from "./ScrollUpButton.module.scss";

const ScrollUpButton = () => {
  const isBrowser = typeof window !== "undefined";
  const [scroll, setScroll] = useState(0);
  const isModalOpen = !!useSearchParams()!.get("modal");

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
      {scroll > 700 && (
        <button
          disabled={isModalOpen}
          className={style.scrollUpButton}
          onClick={scrollToTop}
        >
          <IoIosArrowDown className={style.scrollUpButtonIcon} />
        </button>
      )}
    </>
  );
};

export default ScrollUpButton;
