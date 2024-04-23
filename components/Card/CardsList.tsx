import { ICard } from "@/types/types";
import Card from "./Card";
import style from "@/components/Categories/CategoriesAll.module.scss";

const CardsList = ({
  books,
  category,
}: {
  books: ICard[];
  category: string;
}) => {
  return (
    <ul className={style.cardsList}>
      {books?.map(({ _id, title, author, book_image }: ICard) => (
        <Card
          key={_id}
          cardsInfo={{ _id, author, title, book_image, category }}
        />
      ))}
    </ul>
  );
};

export default CardsList;
