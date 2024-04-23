import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal";
import { getBooksByCategory } from "@/services/getBooks";
import { ICard } from "@/types/types";
import style from "../../../components/Categories/CategoriesAll.module.scss";
import Section from "@/app/containers/Section";
import PageTitle from "@/components/Categories/PageTitle";
import CardsList from "@/components/Card/CardsList";

interface ICategory {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: ICategory) {
  const title = `Bookshelf | ${params.category.split("%20").join(" ")}`;
  return {
    title,
  };
}

export const revalidate = 60;

const Category = async ({ params: { category } }: ICategory) => {
  const books = await getBooksByCategory(category);
  // console.log("CATEGORY", category);
  // const bookCardMarkup = books?.map(
  //   ({ _id, title, author, book_image }: ICard) => (
  //     <Card
  //       key={_id}
  //       cardsInfo={{ _id, author, title, book_image, category }}
  //     />
  //   )
  // );
  const categoryName = category.replace(/%20/g, " ").split(" ");
  const firstPartCategoryName =
    categoryName.slice(0, categoryName.length - 1).join(" ") + " ";
  const lastPartCategoryName = categoryName[categoryName.length - 1];

  return (
    <>
      <Modal />
      <Section>
        <PageTitle
          firstPartName={firstPartCategoryName}
          lastPartName={lastPartCategoryName}
        />
        <CardsList books={books} category={category} />
      </Section>
    </>
  );
};

export default Category;
