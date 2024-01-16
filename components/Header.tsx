import Link from "next/link";
import { FC } from "react";
import UserBar from "./UserBar";
import style from "./header.module.scss";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul className={style.navList}>
          <li>
            <Link href="/books">Home</Link>
          </li>
          <li>
            <Link href="/shopping">Shopping list</Link>
          </li>
          <li className={style.listItem}>
            <UserBar />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
