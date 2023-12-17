"use client";

import { useBooks } from "@/store/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const Categories = () => {
  const [loading, categories, getCategories, getTopBooks, topBooks] = useBooks(
    (state) => [
      state.loading,
      state.categories,
      state.getCategories,
      state.getTopBooks,
      state.topBooks,
    ],
    shallow
  );
  useEffect(() => {
    getCategories();
    getTopBooks();
  }, [getCategories, getTopBooks]);
  return (
    <ul>
      <li>
        <Link href={"/books"}>All categories</Link>
      </li>
      {categories.map(({ list_name }) => (
        <li key={list_name}>
          <Link href={`/books/${list_name}`}>{list_name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
