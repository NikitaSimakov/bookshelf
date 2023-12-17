"use client";
import { useBooks } from "@/store/store";
import { ICard } from "@/types/types";
import Card from "./Card";
import { shallow } from "zustand/shallow";

const TopBooks = () => {
  const [getTopBooks, topBooks] = useBooks(
    (state) => [state.getTopBooks, state.topBooks],
    shallow
  );
  const bookCardMarkup = topBooks.map(({ list_name, books }) => {
    const markup = books?.map(({ _id, author, title, book_image }: ICard) => (
      <Card key={_id} cardsInfo={{ _id, author, title, book_image }} />
    ));
    return (
      <li key={list_name}>
        <h2 style={{ color: "red" }}>{list_name}</h2>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {markup}
        </ul>
      </li>
    );
  });
  return (
    <section>
      <h2>Best Sellers Books</h2>
      <ul>{bookCardMarkup}</ul>
    </section>
  );
};

export default TopBooks;
