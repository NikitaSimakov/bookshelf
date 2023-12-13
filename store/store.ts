import {
  getBooksByCategory,
  getCategories,
  getTopBooks,
} from "@/services/getBooks";
import { createWithEqualityFn } from "zustand/traditional";

interface UseBooks {
  categories: { list_name: string }[];
  category: null | string;
  topBooks: any[];
  booksByCategory: any[];
  loading: boolean;
  error: null | string;
  getCategories: () => Promise<void>;
  getTopBooks: () => Promise<void>;
  getBooksByCategory: (category: string) => Promise<void>;
  setCategory: (category: string) => void;
}

export const useBooks = createWithEqualityFn<UseBooks>()((set) => ({
  categories: [],
  category: null,
  topBooks: [],
  booksByCategory: [],
  loading: false,
  error: null,
  getCategories: async () => {
    set({ loading: true });
    const categories = await getCategories();
    set({ categories, loading: false });
  },
  setCategory: (category) => {
    set({ category });
  },
  getTopBooks: async () => {
    set({ loading: true });
    const topBooks = await getTopBooks();
    set({ topBooks, loading: false });
  },
  getBooksByCategory: async (category) => {
    set({ loading: true });
    const booksByCategory = await getBooksByCategory(category);
    set({ booksByCategory, loading: false });
  },
}));
