import { IBooks } from "@/types/types";
import { getTopBooks } from "@/services/getBooks";
import Modal from "@/components/Modal/Modal";
import { Metadata } from "next";
import CategoriesAll from "@/components/Categories/CategoriesAll";
import Section from "../containers/Section";
import PageTitle from "@/components/Categories/PageTitle";

export const metadata: Metadata = {
  title: "Bookshelf | All books",
};

const Books = async () => {
  const topBooks: IBooks[] = await getTopBooks();

  return (
    <Section>
      <Modal />
      <PageTitle firstPartName="Best Sellers " lastPartName="Books" />
      <CategoriesAll topBooks={topBooks} />
    </Section>
  );
};

Books.requireAuth = true;

export default Books;
