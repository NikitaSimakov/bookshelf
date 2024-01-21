import { getCategories } from "@/services/getBooks";
import { IListName } from "@/types/types";
import Link from "next/link";
import style from "./Categories.module.scss";

const Categories = async () => {
  const categories: IListName[] = await getCategories();

  return (
    <div className={style.categoriesWrapper}>
      <ul className={style.categoriesList}>
        <li className={style.listItem}>
          <Link href={"/books/all"}>All categories</Link>
        </li>
        {categories.map(({ list_name }) => (
          <li className={style.listItem} key={list_name}>
            <Link href={`/books/${list_name}`}>{list_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
