"use client";
import { useBooks } from "@/store/store";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { filterLinks } from "@/services/helpers";
import { BsTrash3Fill } from "react-icons/bs";
import style from "../app/shopping/Shopping.module.scss";
import StoreIcon from "./StoreIcon";

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
        <li key={_id} className={style.shoppingCardItem}>
          <div className={style.shoppingCardImgBox}>
            <Image
              className={style.shoppingCardImg}
              height={485}
              width={335}
              src={book_image}
              alt={title}
            />
          </div>
          <div className={style.shoppingCardTextBox}>
            <h3 className={style.shoppingCardTitle}>{title}</h3>
            <p className={style.shoppingCardCategory}>{list_name}</p>
            <h4 className={style.shoppingCardDescription}>
              {description
                ? description
                : "No more information about this book"}
            </h4>
            <p className={style.shoppingCardAuthor}>{author}</p>
          </div>
          <div className={style.shoppingCardControll}>
            <button
              className={style.shoppingCardDeleteButton}
              type="button"
              onClick={() => removeBook(_id)}
            >
              <BsTrash3Fill />
            </button>
            <ul className={style.shoppingCardStoreLinksList}>
              {buyLinks.map(({ name, url }) => (
                <li className={style.shoppingCardStoreItem} key={url}>
                  <StoreIcon
                    name={name}
                    url={url}
                    widthAmazon={48}
                    heightAmazon={15}
                    widthOther={28}
                    heightOther={27}
                  />
                  {/* <a href={url}>{name}</a> */}
                </li>
              ))}
            </ul>
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
    <ul className={style.shoppingList}>{shoppingItems}</ul>
  ) : (
    <div className={style.emptyBox}>
      <h2 className={style.emptyText}>
        This page is empty, add some books and proceed to order.
      </h2>
    </div>
  );
};

export default ShoppingList;
