"use client";
import { filterLinks } from "@/services/helpers";
import { useBooks } from "@/store/store";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

const ShoppingList = () => {
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  const [shoppingList, removeBook] = useBooks((state) => [
    state.shoppingList,
    state.removeFromShoppingList,
  ]);
  useLayoutEffect(() => {
    setIsLayoutReady(true);
  }, []);

  const shoppingItems = shoppingList?.map(
    ({ _id, book_image, title, author, list_name, description, buy_links }) => {
      const buyLinks = filterLinks(buy_links);
      const markup = (
        <li key={_id}>
          <div>
            <Image height={485} width={335} src={book_image} alt={title} />
            <p>{author}</p>
          </div>
          <div>
            <h3>{title}</h3>
            <p>{list_name}</p>
          </div>
          <div>
            <h4>
              {description
                ? description
                : "No more information about this book"}
            </h4>
            <ul>
              {buyLinks.map(({ name, url }) => (
                <li key={url}>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => removeBook(_id)}>
              x
            </button>
          </div>
        </li>
      );
      return markup;
    }
  );
  // return shoppingList.length !== 0 ? (
  //   <ul>{isLayoutReady && shoppingItems}</ul>
  // ) : (
  //   <h2>This page is empty, add some books and proceed to order.</h2>
  // );
  return isLayoutReady && shoppingList.length !== 0 ? (
    <ul>{shoppingItems}</ul>
  ) : (
    <h2>This page is empty, add some books and proceed to order.</h2>
  );
};

export default ShoppingList;
