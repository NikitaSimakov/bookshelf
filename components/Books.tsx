"use client";
import { useBooks } from "@/store/store";
import { ICard } from "@/types/types";
import Card from "./Card";

const Books = () => {
  const [loading, category, books] = useBooks((state) => [
    state.loading,
    state.category,
    state.booksByCategory,
  ]);

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
          <h2>{category}</h2>
          <ul>{bookCardMarkup}</ul>
        </section>
      )}
    </>
  );
};

export default Books;
