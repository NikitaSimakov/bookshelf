"use client";
import { useState } from "react";

const ThemeToggleBtn = () => {
  const [isDark, setIsDark] = useState(false);
  console.log(document.body.dataset.theme);
  const toggleTheme = () => {
    setIsDark(!isDark);
    !isDark
      ? (document.body.dataset.theme = "dark")
      : (document.body.dataset.theme = "");
  };
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="toggle-button"
      onClick={toggleTheme}
    >
      {isDark ? <p>-</p> : <p>+</p>}
    </button>
  );
};

export default ThemeToggleBtn;
