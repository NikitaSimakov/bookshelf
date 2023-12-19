import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { getBooksByCategory } from "@/services/getBooks";
import { ICard } from "@/types/types";

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

export const revalidate = 60;

const Category = async ({ params: { category } }: ICategory) => {
  console.log(category);
  category = category;

  const books = await getBooksByCategory(category);

  const bookCardMarkup = books?.map(
    ({ _id, title, author, book_image }: ICard) => (
      <Card
        key={_id}
        cardsInfo={{ _id, author, title, book_image, category }}
      />
    )
  );
  return (
    <>
      <Modal />
      <section>
        <h2>{category.replace(/%20/g, " ")}</h2>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {bookCardMarkup}
        </ul>
      </section>
    </>
  );
};

export default Category;
