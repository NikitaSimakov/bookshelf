import { useBooks } from "@/store/store";

const ShoppingButton = ({ id }: { id: string | null }) => {
  const [shoppingList, book, setBook, removeBook] = useBooks((state) => [
    state.shoppingList,
    state.book,
    state.setBookToShoppingList,
    state.removeFromShoppingList,
  ]);
  const inShoppingList = shoppingList.some((book) => book?._id === id);
  return inShoppingList ? (
    <button type="button" onClick={() => removeBook(id!)}>
      Remove from the shopping list
    </button>
  ) : (
    <button type="button" onClick={() => setBook(book)}>
      Add to shopping list
    </button>
  );
};

export default ShoppingButton;
