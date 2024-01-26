import style from "./CardInfo.module.scss";
import amazon from "../public/store/amazon.svg";
import apple from "../public/store/apple.svg";
import Link from "next/link";
import Image from "next/image";

const StoreIcon = ({
  url,
  name,
  widthAmazon,
  widthOther,
  heightAmazon,
  heightOther,
}: {
  url: string;
  name: string;
  widthAmazon: number | null;
  widthOther: number | null;
  heightAmazon: number | null;
  heightOther: number | null;
}) => {
  return (
    <Link rel="noopener noreferrer" target="_blank" href={url}>
      {name === "Amazon" ? (
        <Image
          className={style.storeIconAmazon}
          src={amazon}
          alt={name}
          width={widthAmazon || 62}
          height={heightAmazon || 16}
        />
      ) : (
        <Image
          className={style.storeIcon}
          src={apple}
          alt={name}
          width={widthOther || 33}
          height={heightOther || 32}
        />
      )}
    </Link>
  );
};

export default StoreIcon;
