import { useBooks } from "@/store/store";

const Books = () => {
  const [loading, category, books] = useBooks((state) => [
    state.loading,
    state.category,
    state.booksByCategory,
  ]);

  return (
    <>
      {loading && <p>Loading..</p>}
      {!loading && (
        <div>
          <h2>{category}</h2>
          <ul>
            {books?.map(({ _id, title, author, book_image }: any) => (
              <li key={_id}>
                <img src={book_image} alt={title} />
                <h3>{title}</h3>
                <p>{author}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Books;
