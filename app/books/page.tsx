import { IBook, ICard } from "@/types/types";
import { getTopBooks } from "@/services/getBooks";
import Card from "@/components/Card";

const Books = async () => {
  const topBooks: IBook[] = await getTopBooks();
  const bookCardMarkup = topBooks.map(({ list_name, books }) => {
    const markup = books?.map(({ _id, author, title, book_image }: ICard) => (
      <Card key={_id} cardsInfo={{ _id, author, title, book_image }} />
    ));
    return (
      <li key={list_name}>
        <h2 style={{ color: "red" }}>{list_name}</h2>
        <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
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

export default Books;
