"use client";

import Link from "next/link";
import { IListName } from "@/types/types";
import style from "./Categories.module.scss";
import { usePathname } from "next/navigation";
type CategoriesProps = {
  categories: IListName[];
};

const CategoriesList = ({ categories }: CategoriesProps) => {
  const pathname = usePathname()!;
  const categoryName = pathname
    ?.substring(7, pathname.length)
    .split("%20")
    .join(" ");

  return (
    <>
      <li
        className={`${style.listItem}
        ${
          categoryName === "" || categoryName === "all"
            ? style.listItemActive
            : ""
        }
        `}
      >
        <Link href={"/books/all"}>All categories</Link>
      </li>
      {categories.map(({ list_name }) => (
        <li
          className={`${style.listItem}
           ${categoryName === list_name ? style.listItemActive : ""}`}
          key={list_name}
        >
          <Link href={`/books/${list_name}`}>{list_name}</Link>
        </li>
      ))}
    </>
  );
};

export default CategoriesList;
