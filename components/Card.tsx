import { ICard } from "@/types/types";
import Image from "next/image";

interface CardProps {
  cardsInfo: ICard;
}

export const Card = ({
  cardsInfo: { _id, book_image, title, author },
}: CardProps) => {
  return (
    <li key={_id}>
      <Image height={485} width={335} src={book_image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </li>
  );
};

export default Card;
