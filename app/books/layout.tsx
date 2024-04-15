import Categories from "@/components/Categories/Categories";
import Header from "@/components/Header/Header";
import Support from "@/components/Slider/Support";
import style from "../../components/Categories/Categories.module.scss";

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
