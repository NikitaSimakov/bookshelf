const BooksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <h3>Books</h3>

      {children}
    </section>
  );
};

export default BooksLayout;
