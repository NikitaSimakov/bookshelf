import { FC } from "react";
import Link from "next/link";
import UserBar from "./UserBar";
import Image from "next/image";
import logo from "../public/icons/logo.svg";
import Navigation from "./Navigation";
import ThemeToggleBtn from "./ThemeToggleBtn";
import ScrollUpButton from "./ScrollUpButton";
import style from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        <Link className={style.headerIcon} href="/">
          <Image src={logo} alt="logo" />
          <h1 className={style.headerTitle}>Bookshelf</h1>
        </Link>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <Navigation />
          </ul>
        </nav>
        <div className={style.userBarBox}>
          <ThemeToggleBtn />
          <UserBar />
          <ScrollUpButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
