import { FC } from "react";

import Link from "next/link";
import UserBar from "./UserBar";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../public/icons/logo.svg";
import bookshelf from "../public/icons/Bookshelf.svg";
import Navigation from "./Navigation";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        <Link className={style.headerIcon} href="/">
          <Image src={logo} alt="logo" />
          <Image src={bookshelf} alt="bookshelf" />
        </Link>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <Navigation />
          </ul>
        </nav>
        <ThemeToggleBtn />
        <UserBar />
      </div>
    </header>
  );
};

export default Header;
