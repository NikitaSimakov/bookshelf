import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <Link href="/">Bookshelf</Link>
    </header>
  );
};

export default Header;
