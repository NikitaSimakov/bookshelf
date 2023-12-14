import { ICard } from "@/types/types";

interface CardProps {
  cardsInfo: ICard;
}

export const Card = ({
  cardsInfo: { _id, book_image, title, author },
}: CardProps) => {
  return (
    <li key={_id}>
      <img src={book_image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </li>
  );
};

export default Card;
