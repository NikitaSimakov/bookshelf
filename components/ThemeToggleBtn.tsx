"use client";
import { useEffect, useState } from "react";
import style from "./ThemeToggleBtn.module.scss";
import { useBooks } from "@/store/store";

const ThemeToggleBtn = () => {
  const [isDarkBook, setIsDarkBook] = useBooks((state) => [
    state.isDark,
    state.changeTheme,
  ]);
  const [isDark, setIsDark] = useState(isDarkBook);
  useEffect(() => {
    setIsDark(isDarkBook);
    !isDark
      ? (document.body.dataset.theme = "dark")
      : (document.body.dataset.theme = "");
  }, [isDark, isDarkBook]);
  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setIsDarkBook();
    setIsDark(e.target.checked);
    !isDark
      ? (document.body.dataset.theme = "dark")
      : (document.body.dataset.theme = "");
  };

  return (
    <div className={style.toggleContainer}>
      <input
        type="checkbox"
        id="check"
        className={style.toggle}
        onChange={(e) => toggleTheme(e)}
        checked={isDarkBook}
      />
      <label htmlFor="check"></label>
    </div>
    // <button
    //   aria-label="Toggle Dark Mode"
    //   className="toggle-button"
    //   onClick={toggleTheme}
    // >
    //   {isDark ? <p>-</p> : <p>+</p>}
    // </button>
  );
};

export default ThemeToggleBtn;
