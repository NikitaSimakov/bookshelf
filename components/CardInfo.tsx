import { getBookById } from "@/services/getBooks";
import Image from "next/image";

interface ICardInfo {
  id: string;
}

const CardInfo = async ({ id }: ICardInfo) => {
  const { title, author, description, book_image, buy_links } =
    await getBookById(id);
  const buyLinks: { name: string; url: string }[] = buy_links.filter(
    (link: { name: string; url: string }) =>
      link.name === "Amazon" ||
      link.name === "Apple Books" ||
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
