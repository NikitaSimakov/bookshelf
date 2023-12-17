import Categories from "@/components/Categories";

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
