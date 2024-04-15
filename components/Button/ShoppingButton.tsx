import { useBooks } from "@/store/store";
import style from "./ShoppingButton.module.scss";

const ShoppingButton = ({ id }: { id: string | null }) => {
  const [shoppingList, book, setBook, removeBook] = useBooks((state) => [
    state.shoppingList,
    state.book,
    state.setBookToShoppingList,
    state.removeFromShoppingList,
  ]);
  const inShoppingList = shoppingList.some((book) => book?._id === id);

  return inShoppingList ? (
    <>
      <button
        className={style.shoppingButton}
        type="button"
        onClick={() => removeBook(id!)}
      >
        <p>Remove from the shopping list</p>
      </button>
      <p className={style.removeText}>
        Сongratulations! You have added the book to the shopping list. To
        delete, press the button “Remove from the shopping list”.
      </p>
    </>
  ) : (
    <button
      className={style.shoppingButton}
      type="button"
      onClick={() => setBook(book)}
    >
      Add to shopping list
    </button>
  );
};

export default ShoppingButton;
