import Card from "@/components/Card";
// import CardInfo from "@/components/CardInfo";
// import CardInfo from "@/components/CardInfo";
import Modal from "@/components/Modal";
import { getBooksByCategory } from "@/services/getBooks";
import { ICard } from "@/types/types";

interface ICategory {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: ICategory) {
  // console.log(params.category.split("%20").join(" "));
  const title = params.category.split("%20").join(" ");
  return {
    title,
  };
}

// let category: string;

// export async function generateStaticParams() {
//   const books: ICard[] = await getBooksByCategory(category);
//   return books.map((book) => ({
//     slug: book._id,
//   }));
// }

export const revalidate = 60;

const Category = async ({ params: { category } }: ICategory) => {
  // category = category;

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
      {/* <CardInfo />
      </Modal> */}
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
