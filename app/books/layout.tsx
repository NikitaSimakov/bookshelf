import Categories from "@/components/Categories";
import Header from "@/components/Header";
import style from "../../components/Categories.module.scss";

const BooksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <section className={`container ${style.everythingSection}`}>
        <div className={style.leftBar}>
          <Categories />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            nostrum eius reiciendis quis eaque molestias quam quae suscipit
            illum unde! Maxime doloribus commodi animi soluta nostrum
            repellendus at molestias nobis, ipsa veritatis ex ipsum, officia
            tempore! Aperiam consectetur distinctio quidem ducimus optio fugiat
            porro consequatur ex ipsam laudantium alias cum maiores similique
            iste quaerat velit dolores eligendi dignissimos, enim modi corporis
            deleniti. Veniam, asperiores alias nihil odio odit soluta
            perspiciatis libero tempore ab quod autem ad ratione deleniti
            eveniet quo. Quaerat reiciendis ducimus eum nisi consequatur id
            atque dolore obcaecati magni consequuntur. Dolor modi ipsa, velit
            dicta ipsam earum nihil!
          </p>
        </div>
        <div className="rightBar">{children}</div>
      </section>
    </>
  );
};

export default BooksLayout;
