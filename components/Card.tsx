import { ICard } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  cardsInfo: ICard;
}

export const Card = ({
  cardsInfo: { _id, book_image, title, author, category },
}: CardProps) => {
  return (
    <li key={_id}>
      <Image height={485} width={335} src={book_image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <div style={{ border: "1px" }}>
        <Link href={`/books/${category}?modal=${_id}`} scroll={false}>
          Quick view
        </Link>
        {/* <Link href={`${category}?modal=${_id}`}>Quick view</Link> */}
      </div>
    </li>
  );
};

export default Card;
