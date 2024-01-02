import Link from "next/link";
import { FC } from "react";
import UserBar from "./UserBar";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/books">Home</Link>
          </li>
          <li>
            <Link href="/shopping">Shopping list</Link>
          </li>
          <li>
            <UserBar />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
