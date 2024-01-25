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
  return (
    <li key={_id} className={style.card}>
      <Image
        className={style.cardImage}
        height={485}
        width={335}
        src={book_image}
        alt={title}
      />
      <div className={style.cardPopup}>
        <Link href={`/books/${category}?modal=${_id}`} replace scroll={false}>
          <p className={style.cardPopupText}>Quick view</p>
        </Link>
      </div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.author}>{author}</p>
      {/* <div style={{ border: "1px" }}></div> */}
    </li>
  );
};

export default Card;
