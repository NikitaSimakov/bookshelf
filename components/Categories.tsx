import { getCategories } from "@/services/getBooks";
import { IListName } from "@/types/types";
import Link from "next/link";

const Categories = async () => {
  const categories: IListName[] = await getCategories();

  return (
    <div>
      <ul>
        <li>
          <Link href={"/books/all"}>All categories</Link>
        </li>
        {categories.map(({ list_name }) => (
          <li key={list_name}>
            <Link href={`/books/${list_name}`}>{list_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
