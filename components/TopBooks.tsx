import { useBooks } from "@/store/store";
import { ICard } from "@/types/types";
import Card from "./Card";

const TopBooks = () => {
  const topBooks = useBooks((state) => state.topBooks);
  const bookCardMarkup = topBooks.map(({ list_name, books }) => {
    const markup = books?.map(({ _id, author, title, book_image }: ICard) => (
      <Card key={_id} cardsInfo={{ _id, author, title, book_image }} />
    ));
    return (
      <div key={list_name}>
        <h2 style={{ color: "red" }}>{list_name}</h2>
        {markup}
      </div>
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
