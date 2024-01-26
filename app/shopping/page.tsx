import ShoppingList from "@/components/ShoppingList";
import { Metadata } from "next";
import style from "./Shopping.module.scss";

export const metadata: Metadata = {
  title: "Bookshelf | Shopping list",
};

const Shopping = () => {
  return (
    <>
      <h1 className={style.shoppingTitle}>
        Shopping <span>List</span>
      </h1>
      <ShoppingList />
    </>
  );
};

export default Shopping;
