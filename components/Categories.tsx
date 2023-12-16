"use client";

import { useBooks } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const Categories = () => {
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
  useEffect(() => {
    getCategories();
    getTopBooks();
  }, []);
  return (
    <ul>
      <li>All categories</li>
      {categories.map(({ list_name }) => (
        <li key={list_name}>
          <Link href={`/books/${list_name}`}>{list_name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
