// "use client";
// import Books from "@/components/Books";

import CategoryList from "@/components/CategoryList";
import { useBooks } from "@/store/store";
import { shallow } from "zustand/shallow";

interface ICategoryList {
  list_name: string;
}

// const getCategoryList = async (): Promise<ICategoryList[]> => {
//   const response = await fetch(
//     "https://books-backend.p.goit.global/books/category-list"
//   );
//   return response.json();
// };

const Main = async () => {
  // const getCategories = useBooks((state) => state.getCategories, shallow)();
  // const categories = await getCategories();
  // const categories = await getCategoryList();

  return (
    <section>
      <h3>Main section</h3>
      <CategoryList />
    </section>
  );
};

export default Main;
