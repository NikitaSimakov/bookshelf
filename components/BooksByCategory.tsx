"use client";
import { useBooks } from "@/store/store";
import { ICard } from "@/types/types";
import { useEffect } from "react";
import Card from "./Card";

const BooksByCategory = ({ category }: { category: string }) => {
  const [loading, books, getBooksByCategory] = useBooks((state) => [
    state.loading,
    state.booksByCategory,
    state.getBooksByCategory,
  ]);

  useEffect(() => {
    getBooksByCategory(category);
  }, [category, getBooksByCategory]);

  const bookCardMarkup = books?.map(
    ({ _id, title, author, book_image }: ICard) => (
      <Card key={_id} cardsInfo={{ _id, author, title, book_image }} />
    )
  );
  return (
    <>
      {loading && <p>Loading..</p>}
      {!loading && (
        <section>
          <h2>{category.replace(/%20/g, " ")}</h2>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {bookCardMarkup}
          </ul>
        </section>
      )}
    </>
  );
};

export default BooksByCategory;
