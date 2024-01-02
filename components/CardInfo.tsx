"use client";
import { useBooks } from "@/store/store";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ShoppingButton from "./ShoppingButton";
import { filterLinks } from "@/services/helpers";

const CardInfo = () => {
  const params = useSearchParams();
  const id = params!.get("modal");

  const [setBook, book] = useBooks((state) => [state.setBook, state.book]);

  useEffect(() => {
    setBook(id!);
  }, [id, setBook]);

  const { title, author, description, book_image, buy_links } = book;
  // const buyLinks = buy_links.filter(
  //   (link: { name: string; url: string }) =>
  //     link.name === "Amazon" ||
  //     link.name === "Apple" ||
  //     link.name === "Barnes and Noble"
  // );
  const buyLinks = filterLinks(buy_links);
  const markup = (
    <div>
      <div>
        <Image src={book_image} alt={title} width={283} height={427} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{description}</p>
        <ul>
          {buyLinks.map(({ name, url }) => (
            <li key={url}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </div>

      <ShoppingButton id={id} />
    </div>
  );
  return markup;
};

export default CardInfo;

// const CardInfo = async ({ id }: { id: string }) => {
//   const book: IBook = await getBookById(id);
//   console.log(book);
//   const { title, author, description, book_image, buy_links } = book;
//   const buyLinks = buy_links.filter(
//     (link: { name: string; url: string }) =>
//       link.name === "Amazon" ||
//       link.name === "Apple" ||
//       link.name === "Barnes and Noble"
//   );

//   const markup = (
//     <div>
//       <div>
//         <Image src={book_image} alt={title} width={283} height={427} />
//       </div>
//       <div>
//         <h3>{title}</h3>
//         <p>{author}</p>
//         <p>{description}</p>
//         <div>
//           {buyLinks.map(({ name, url }) => (
//             <a key={url} href={url}>
//               {name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
//   return markup;
// };
