"use client";

import Link from "next/link";
import { IListName } from "@/types/types";
import style from "./CategoryCatalogue.module.scss";
import { usePathname } from "next/navigation";
type CategoriesProps = {
  categories: IListName[];
};

const CategoryCatalogue = ({ categories }: CategoriesProps) => {
  const pathname = usePathname()!;
  const categoryName = pathname
    ?.substring(7, pathname.length)
    .split("%20")
    .join(" ");

  return (
    <ul className={style.categoryCatalogue}>
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
    </ul>
  );
};

export default CategoryCatalogue;
