import ShoppingList from "@/components/ShoppingList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookshelf | Shopping list",
};

const Shopping = () => {
  return <ShoppingList />;
};

export default Shopping;
