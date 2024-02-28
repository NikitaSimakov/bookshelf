import Image from "next/image";
import { filterLinks } from "@/services/helpers";
import style from "../app/shopping/Shopping.module.scss";
import { BsTrash3Fill } from "react-icons/bs";
import StoreIcon from "./StoreIcon";

interface ShoppingListItemProps {
  _id: string;
  book_image: string;
  title: string;
  author: string;
  list_name: string;
  description: string;
  buy_links: {
    name: string;
    url: string;
  }[];
  removeBook: Function;
}

export const ShoppingListItem = ({
  _id,
  book_image,
  title,
  author,
  list_name,
  description,
  buy_links,
  removeBook,
}: ShoppingListItemProps) => {
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
          {description ? description : "No more information about this book"}
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
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
  return markup;
};
