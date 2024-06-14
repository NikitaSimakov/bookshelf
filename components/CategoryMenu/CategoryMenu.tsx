import { getCategories } from "@/services/getBooks";
import { IListName } from "@/types/types";
import style from "./CategoryMenu.module.scss";
import CategoryCatalogue from "./CategoryCatalogue";
import Section from "@/app/containers/Section";

const CategoryMenu = async () => {
  const categories: IListName[] = await getCategories();

  return (
    <Section classname={style.categoriesWrapper}>
      <CategoryCatalogue categories={categories} />
    </Section>
  );
};

export default CategoryMenu;
