import { IBooks } from "@/types/types";
import { getTopBooks } from "@/services/getBooks";
import Modal from "@/components/Modal";
import { Metadata } from "next";
import CategoriesAll from "@/components/CategoriesAll";

export const metadata: Metadata = {
  title: "Bookshelf | All books",
};

const Books = async () => {
  const topBooks: IBooks[] = await getTopBooks();

  return (
    <section>
      <Modal />
      <CategoriesAll topBooks={topBooks} />
    </section>
  );
};

Books.requireAuth = true;

export default Books;
