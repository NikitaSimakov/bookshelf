"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiShoppingBagLine } from "react-icons/ri";
import style from "../components/Header.module.scss";

const Navigation = () => {
  const navLinks = [
    { label: "Home", href: "/books" },
    { label: "Shopping list", href: "/shopping", icon: <RiShoppingBagLine /> },
  ];
  const session = useSession();
  const pathname = usePathname();
  const croppedPathname =
    "/" + pathname.substring(1, pathname.length).split("/")[0];
  const markup = navLinks.map(({ label, href, icon }) => (
    <li className={style.navListItem} key={label}>
      <Link
        className={
          // croppedPathname === href ? style.navLinkActive : style.navLink
          `${style.navLink} ${croppedPathname === href && style.navLinkActive}`
        }
        href={href}
      >
        {label}
        {icon}
      </Link>
    </li>
  ));
  return <>{session.data ? markup : ""}</>;
};

export default Navigation;
