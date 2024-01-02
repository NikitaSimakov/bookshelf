"use client";
import { IBooks, ICard } from "@/types/types";
import { getCategories, getTopBooks } from "@/services/getBooks";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const Books = async () => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      // redirect("/sign-in");
    },
  });
  const topBooks: IBooks[] = await getTopBooks();
  const bookCardMarkup = topBooks.map(({ list_name, books }) => {
    const markup = books?.map(({ _id, author, title, book_image }: ICard) => (
      <Card
        key={_id}
        cardsInfo={{ _id, author, title, book_image, category: "all" }}
      />
    ));
    return (
      <li key={list_name}>
        <h2 style={{ color: "red" }}>{list_name}</h2>
        <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
          {markup}
        </ul>
        <Link href={`/books/${list_name}`}>See more</Link>
      </li>
    );
  });
  return (
    <section>
      <Modal />
      <h2>Best Sellers Books</h2>
      <ul>{bookCardMarkup}</ul>
    </section>
  );
};

Books.requireAuth = true;

export default Books;
