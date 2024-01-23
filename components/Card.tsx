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
      <Link href={`/books/${category}?modal=${_id}`} replace scroll={false}>
        <Image
          className={style.cardImage}
          height={485}
          width={335}
          src={book_image}
          alt={title}
        />
        <h3 className={style.title}>{title}</h3>
        <p className={style.author}>{author}</p>
        <div style={{ border: "1px" }}></div>
      </Link>
    </li>
  );
};

export default Card;
