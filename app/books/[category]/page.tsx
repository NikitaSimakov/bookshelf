import Modal from "@/components/Modal/Modal";
import { getBooksByCategory } from "@/services/getBooks";
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

  const categoryName = category.replace(/%20/g, " ").split(" ");
  const firstPartCategoryName = categoryName.slice(0, -1).join(" ") + " ";
  const lastPartCategoryName = categoryName.slice(-1)[0];

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
