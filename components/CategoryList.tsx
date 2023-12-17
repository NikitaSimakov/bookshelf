"use client";

import { MouseEvent, useEffect } from "react";
import { useBooks } from "@/store/store";
import { shallow } from "zustand/shallow";
import TopBooks from "./TopBooks";
import Books from "./Books";

const CategoryList = () => {
  const [
    loading,
    setCategory,
    category,
    categories,
    getCategories,
    getBooksByCategory,
    getTopBooks,
    topBooks,
  ] = useBooks(
    (state) => [
      state.loading,
      state.setCategory,
      state.category,
      state.categories,
      state.getCategories,
      state.getBooksByCategory,
      state.getTopBooks,
      state.topBooks,
    ],
    shallow
  );
  const getCategory = ({
    target,
  }: MouseEvent<HTMLUListElement, globalThis.MouseEvent>) => {
    const { textContent } = target as HTMLElement;
    if (textContent) setCategory(textContent);
    if (textContent === "All categories") setCategory("");
  };
  useEffect(() => {
    getCategories();
    getTopBooks();
  }, [getCategories, getTopBooks]);
  useEffect(() => {
    if (category) getBooksByCategory(category);
  }, [category, getBooksByCategory]);
  return (
    <>
      {loading && <p>loading..</p>}
      <div>
        <ul onClick={getCategory}>
          <li>All categories</li>
          {categories.map(({ list_name }) => (
            <li key={list_name}>{list_name}</li>
          ))}
        </ul>
      </div>
      {/* {category ? <Books /> : <TopBooks />} */}
    </>
  );
};

export default CategoryList;
