"use client";
import { useBooks } from "@/store/store";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ShoppingButton from "./ShoppingButton";
import { filterLinks } from "@/services/helpers";
import style from "./CardInfo.module.scss";
import StoreIcon from "./StoreIcon";
import amazon from "../public/store/amazon.svg";
import apple from "../public/store/apple.svg";
import Link from "next/link";

const CardInfo = () => {
  const params = useSearchParams();
  const id = params!.get("modal");

  const [setBook, book] = useBooks((state) => [state.setBook, state.book]);

  useEffect(() => {
    setBook(id!);
  }, [id, setBook]);

  const { title, author, description, book_image, buy_links } = book;

  const buyLinks = filterLinks(buy_links);
  const markup = (
    <div className={style.cardInfoContainer}>
      <div className={style.cardInfoWrapper}>
        <Image
          className={style.cardInfoImage}
          src={book_image}
          alt={title}
          width={283}
          height={427}
        />
      </div>

      <div className={style.descriptionWrapper}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.author}>{author}</p>
        <p className={style.description}>
          {description || "No more information about this book"}
        </p>
        <ul className={style.storesLinks}>
          {buyLinks.map(({ name, url }) => (
            <li key={url}>
              <StoreIcon
                name={name}
                url={url}
                widthAmazon={62}
                heightAmazon={16}
                widthOther={33}
                heightOther={32}
              />
              {/* <Link rel="noopener noreferrer" target="_blank" href={url}>
                {name === "Amazon" ? (
                  <Image
                    className={style.storeIconAmazon}
                    src={amazon}
                    alt={name}
                    width={62}
                    height={16}
                  />
                ) : (
                  <Image
                    className={style.storeIcon}
                    src={apple}
                    alt={name}
                    width={33}
                    height={32}
                  />
                )}
              </Link> */}
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
