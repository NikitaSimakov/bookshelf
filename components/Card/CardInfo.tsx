"use client";
import { useBooks } from "@/store/store";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ShoppingButton from "../Button/ShoppingButton";
import { filterLinks } from "@/services/helpers";
import style from "./CardInfo.module.scss";
import StoreIcon from "../Modal/StoreIcon";
import SceletonCardInfo from "../Sceleton/SceletonCardInfo";

const CardInfo = () => {
  const params = useSearchParams();
  const id = params!.get("modal");

  const [setBook, book] = useBooks((state) => [state.setBook, state.book]);
  useEffect(() => {
    setBook(id!);
  }, [id, setBook]);

  const { title, author, description, book_image, buy_links, _id } = book;
  const buyLinks = filterLinks(buy_links);
  const markup = (
    <div className={style.cardInfoContainer}>
      <div className={style.cardInfoWrapper}>
        <Image
          className={style.cardInfoImage}
          src={book_image}
          alt={title}
          width={283}
          height={427}
        />
      </div>

      <div className={style.descriptionWrapper}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.author}>{author}</p>
        <p className={style.description}>
          {description || "No more information about this book"}
        </p>
        <ul className={style.storesLinks}>
          {buyLinks?.map(({ name, url }) => (
            <li key={url}>
              <StoreIcon
                name={name}
                url={url}
                widthAmazon={62}
                heightAmazon={16}
                widthOther={33}
                heightOther={32}
              />
            </li>
          ))}
        </ul>
      </div>

      <ShoppingButton id={id} />
    </div>
  );
  return _id ? markup : <SceletonCardInfo />;
};

export default CardInfo;
