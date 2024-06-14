import style from "./BooksLayoutSection.module.scss";

const BooksLayoutSection = ({ children }: { children: React.ReactNode }) => (
  <section className={`container ${style.everythingSection}`}>
    {children}
  </section>
);

export default BooksLayoutSection;
