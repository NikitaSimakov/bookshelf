"use client";
import { useBooks } from "@/store/store";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { filterLinks } from "@/services/helpers";
import { BsTrash3Fill } from "react-icons/bs";
import style from "../app/shopping/Shopping.module.scss";
import { ShoppingListItem } from "./ShoppingListItem";
import { ShoppingPaginationBlock } from "./ShoppingListPaginationBlock";

const ShoppingList = () => {
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const [shoppingList, removeBook] = useBooks((state) => [
    state.shoppingList,
    state.removeFromShoppingList,
  ]);
  const [page, setPage] = useState(1);
  const lastPage = splitByThree(shoppingList).length || 1;

  function splitByThree(array: any[]): any[][] {
    const dividedParts = [];
    for (let i = 0; i < array.length; i += 3) {
      dividedParts.push(array.slice(i, i + 3));
    }
    return dividedParts;
  }

  useLayoutEffect(() => {
    setIsLayoutReady(true);
  }, []);

  const paginatePages = (n: number) => {
    const result = splitByThree(shoppingList);
    const shoppingItems = result[n - 1]?.map(
      ({ _id, book_image, title, author, list_name, description, buy_links }) =>
        ShoppingListItem({
          _id,
          book_image,
          title,
          author,
          list_name,
          description,
          buy_links,
          removeBook,
        })
    );
    return shoppingItems;
  };

  const shoppingItems = shoppingList?.map(
    ({ _id, book_image, title, author, list_name, description, buy_links }) =>
      ShoppingListItem({
        _id,
        book_image,
        title,
        author,
        list_name,
        description,
        buy_links,
        removeBook,
      })
  );
  return isLayoutReady && shoppingList.length !== 0 ? (
    <ul className={style.shoppingList}>
      {paginatePages(page)}
      {
        <ShoppingPaginationBlock
          page={page}
          lastPage={lastPage}
          setPage={setPage}
        />
      }
    </ul>
  ) : (
    <div className={style.emptyBox}>
      <h2 className={style.emptyText}>
        This page is empty, add some books and proceed to order.
      </h2>
    </div>
  );
};

export default ShoppingList;
