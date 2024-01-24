import Categories from "@/components/Categories";
import Header from "@/components/Header";
import style from "../../components/Categories.module.scss";
import Support from "@/components/Support";

const BooksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <section className={`container ${style.everythingSection}`}>
        <div className={style.leftBar}>
          <Categories />
          <Support />
        </div>
        <div className={style.rightBar}>{children}</div>
      </section>
    </>
  );
};

export default BooksLayout;
