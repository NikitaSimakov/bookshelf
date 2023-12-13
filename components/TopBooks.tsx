import { useBooks } from "@/store/store";

const TopBooks = () => {
  const topBooks = useBooks((state) => state.topBooks);
  const markup = topBooks.map(({ list_name, books }) => {
    const booksCardMarkup = books?.map(
      ({ _id, author, title, book_image }: any) => (
        <li key={_id}>
          <img src={book_image} alt={title} />
          <h3>{title}</h3>
          <p>{author}</p>
        </li>
      )
    );
    return (
      <>
        <h2 style={{ color: "red" }}>{list_name}</h2>
        {booksCardMarkup}
      </>
    );
  });
  return (
    <>
      <h2>Best Sellers Books</h2>
      <ul>{markup}</ul>
    </>
  );
};

export default TopBooks;
