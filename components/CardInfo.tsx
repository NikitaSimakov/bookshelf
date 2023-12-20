import { getBookById } from "@/services/getBooks";
import Image from "next/image";

interface IBook {
  title: string;
  author: string;
  description: string;
  book_image: string;
  buy_links: { name: string; url: string }[];
}

const CardInfo = async ({ id }: { id: string }) => {
  const book: IBook = await getBookById(id);
  const { title, author, description, book_image, buy_links } = book;
  const buyLinks = buy_links.filter(
    (link: { name: string; url: string }) =>
      link.name === "Amazon" ||
      link.name === "Apple" ||
      link.name === "Barnes and Noble"
  );

  const markup = (
    <div>
      <div>
        <Image src={book_image} alt={title} width={283} height={427} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{description}</p>
        <div>
          {buyLinks.map(({ name, url }) => (
            <a key={url} href={url}>
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
  return markup;
};

export default CardInfo;
