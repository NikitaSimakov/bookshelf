import { FC } from "react";
import Link from "next/link";
import UserBar from "./UserBar";
import Image from "next/image";
import logo from "../public/icons/logo.svg";
import Navigation from "./Navigation";
import ThemeToggleBtn from "./ThemeToggleBtn";
import ScrollUpButton from "./ScrollUpButton";
import style from "./header.module.scss";
import Menu from "./Menu";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={`${style.headerContainer}`}>
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
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
