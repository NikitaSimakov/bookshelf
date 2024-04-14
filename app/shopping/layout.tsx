import Header from "@/components/Header";
import Support from "@/components/Support";
import style from "./Shopping.module.scss";

const ShoppingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className={`container ${style.shoppingContainer}`}>
        <div className={style.leftbar}>
          <Support />
        </div>
        <div className={style.rightbar}>{children}</div>
      </div>
    </>
  );
};

export default ShoppingLayout;
