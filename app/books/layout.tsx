import Categories from "@/components/Categories";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Here we are reading",
};

const BooksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h3>Books</h3>
      <Categories />
      {children}
    </section>
  );
};

export default BooksLayout;
