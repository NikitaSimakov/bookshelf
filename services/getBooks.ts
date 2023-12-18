export const getCategories = async () => {
  const response = await fetch(
    "https://books-backend.p.goit.global/books/category-list"
  );
  return response.json();
};

export const getTopBooks = async () => {
  const response = await fetch(
    "https://books-backend.p.goit.global/books/top-books"
  );
  return response.json();
};

export const getBooksByCategory = async (category: string) => {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/category?category=${category}`,
    {
      cache: "force-cache",
    }
  );
  return response.json();
};

export const getBookById = async (id: string) => {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/${id}`
  );
  return response.json();
};
