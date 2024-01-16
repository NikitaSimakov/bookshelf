import Categories from "@/components/Categories";
import Header from "@/components/Header";

const BooksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <section>
        <h3>Books</h3>
        <Categories />
        {children}
      </section>
    </>
  );
};

export default BooksLayout;
