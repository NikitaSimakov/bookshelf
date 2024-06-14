import Link from "next/link";
import { IBooks, ICard } from "../../types/types";
import Card from "../Card/Card";
import style from "./CategoriesAll.module.scss";

type AllCategoriesProps = {
  topBooks: IBooks[];
};

const CategoriesAll = ({ topBooks }: AllCategoriesProps) => {
  const bookCardMarkup = topBooks.map(({ list_name, books }) => {
    const markup = books?.map(({ _id, author, title, book_image }: ICard) => (
      <Card
        key={_id}
        cardsInfo={{ _id, author, title, book_image, category: "all" }}
      />
    ));
    return (
      <li key={list_name} className={style.listItem}>
        <h2 className={style.listTitle}>{list_name}</h2>
        <ul className={style.cardsList}>{markup}</ul>
        <Link className={style.moreBtn} href={`/books/${list_name}`}>
          See more
        </Link>
      </li>
    );
  });
  return <ul className={style.list}>{bookCardMarkup}</ul>;
};

export default CategoriesAll;
