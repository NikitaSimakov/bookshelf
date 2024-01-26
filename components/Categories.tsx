import { getCategories } from "@/services/getBooks";
import { IListName } from "@/types/types";
import style from "./Categories.module.scss";
import CategoriesList from "./CategoriesList";

const Categories = async () => {
  const categories: IListName[] = await getCategories();

  return (
    <div className={style.categoriesWrapper}>
      <ul className={style.categoriesList}>
        <CategoriesList categories={categories} />
      </ul>
    </div>
  );
};

export default Categories;
