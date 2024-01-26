import { IBooks, ICard } from "@/types/types";
import { getTopBooks } from "@/services/getBooks";
// import Card from "@/components/Card";
import Modal from "@/components/Modal";
// import Link from "next/link";
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
      {/* <h2>
        Best Sellers <span>Books</span>
      </h2>
      <ul> */}
      <CategoriesAll topBooks={topBooks} />
      {/* </ul> */}
      {/* <ul>{bookCardMarkup}</ul> */}
    </section>
  );
};

Books.requireAuth = true;

export default Books;
