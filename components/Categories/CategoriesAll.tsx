import Link from "next/link";
import style from "./CategoriesAll.module.scss";
import { IBooks, ICard } from "../../types/types";
import Card from "../Card/Card";

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
  return (
    <>
      <h2 className={style.pageTitle}>
        Best Sellers <span>Books</span>
      </h2>
      <ul className={style.list}>{bookCardMarkup}</ul>
    </>
  );
};

export default CategoriesAll;
