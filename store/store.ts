import { createWithEqualityFn } from "zustand/traditional";
import { getBookById } from "@/services/getBooks";
import { devtools, persist } from "zustand/middleware";
import { IBook } from "@/types/types";

interface UseBooks {
  error: null | string;
  shoppingList: IBook[];
  isDark: boolean;
  book: IBook;
  changeTheme: () => void;
  setBook: (id: string) => void;
  setBookToShoppingList: (book: IBook) => void;
  removeFromShoppingList: (id: string) => void;
}

export const useBooks = createWithEqualityFn<UseBooks>()(
  persist(
    devtools((set) => ({
      error: null,
      shoppingList: [],
      isDark: false,
      book: {
        _id: "",
        title: "",
        author: "",
        description: "",
        book_image: "",
        list_name: "",
        buy_links: [{ name: "", url: "" }],
      },
      changeTheme: () => {
        set((state) => ({
          isDark: !state.isDark,
        }));
      },
      setBook: async (id) => {
        const book = await getBookById(id);
        set((state) => (state.book = book));
      },
      setBookToShoppingList: (book) =>
        set((state) => ({
          shoppingList: [...state.shoppingList, book],
        })),
      removeFromShoppingList: (id) =>
        set((state) => ({
          shoppingList: state.shoppingList.filter((book) => book?._id !== id),
        })),
    })),
    { name: "shopping-list" }
  )
);
