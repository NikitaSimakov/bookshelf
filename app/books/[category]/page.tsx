import BooksByCategory from "@/components/BooksByCategory";
import Card from "@/components/Card";
import { getBooksByCategory } from "@/services/getBooks";
import { useBooks } from "@/store/store";
import { ICard } from "@/types/types";
// import Card from "@/components/Card";
// import { ICard } from "@/types/types";
// import { useEffect } from "react";

interface ICategory {
  params: {
    category: string;
  };
}

let category: string;

export async function generateStaticParams() {
  const books: ICard[] = await getBooksByCategory(category);
  return books.map((book) => ({
    slug: book._id,
  }));
}

const Category = async ({ params: { category } }: ICategory) => {
  category = category;

  const books = await getBooksByCategory(category);

  const bookCardMarkup = books?.map(
    ({ _id, title, author, book_image }: ICard) => (
      <Card key={_id} cardsInfo={{ _id, author, title, book_image }} />
    )
  );
  return (
    <>
      {/* {loading && <p>Loading..</p>}
      {!loading && ( */}
      <section>
        <h2>{category.replace(/%20/g, " ")}</h2>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {bookCardMarkup}
        </ul>
      </section>
      {/* // )} */}
    </>
  );

  // const [loading, books, getBooksByCategory] = useBooks((state) => [
  //   state.loading,
  //   state.booksByCategory,
  //   state.getBooksByCategory,
  // ]);

  // useEffect(() => {
  //   getBooksByCategory(category);
  // }, [category]);

  // const bookCardMarkup = books?.map(
  //   ({ _id, title, author, book_image }: ICard) => (
  //     <Card key={_id} cardsInfo={{ _id, author, title, book_image }} />
  //   )
  // );
  // return (
  // <BooksByCategory category={category} />
  // <>
  //   {loading && <p>Loading..</p>}
  //   {!loading && (
  //     <section>
  //       <h2>{category.replace(/%20/g, " ")}</h2>
  //       <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
  //         {bookCardMarkup}
  //       </ul>
  //     </section>
  //   )}
  // </>
  // );
};

export default Category;
