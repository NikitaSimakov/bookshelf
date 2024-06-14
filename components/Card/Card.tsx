import { ICard } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import style from "./Card.module.scss";

interface CardProps {
  cardsInfo: ICard;
}

export const Card = ({
  cardsInfo: { _id, book_image, title, author, category },
}: CardProps) => {
  console.log(book_image);
  const bookImageSrc = book_image || "/default/default-book-image.jpg";
  return (
    <li key={_id} className={style.card}>
      <div className={style.cardImageWrapper}>
        <Image
          className={style.cardImage}
          height={485}
          width={335}
          src={bookImageSrc}
          alt={title}
        />
        <div className={style.cardPopup}>
          <Link href={`/books/${category}?modal=${_id}`} replace scroll={false}>
            <p className={style.cardPopupText}>Quick view</p>
          </Link>
        </div>
      </div>

      <h3 className={style.title}>{title}</h3>
      <p className={style.author}>{author}</p>
    </li>
  );
};

export default Card;
