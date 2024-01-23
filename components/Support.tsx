"use client";
import Image from "next/image";
import Planeta from "../public/support/Grupo_Planeta_logo.svg";
import Hachette from "../public/support/Logo_Hachette_Livre_Actuel.svg";
import Scholastic from "../public/support/Logo_Scholastic.svg";
import McGraw from "../public/support/McGraw-Hill_Education_(jusqu'en_2013).svg";
import Pearson from "../public/support/Pearson_logo.svg";
import Penguin from "../public/support/Penguin_Random_House_201x_logo.svg";
import Reed from "../public/support/Reed_Elsevier_Logo.svg";
import Thomson from "../public/support/Thomson_Reuters_logo.svg";
import Wolters from "../public/support/Wolters_Kluwer_Logo.svg";

const supportList = [
  {
    src: Planeta,
    name: "Planeta",
    id: 1,
    width: 150,
    height: 50,
  },
  {
    src: Hachette,
    name: "Hachette",
    width: 150,
    height: 50,
    id: 2,
  },
  {
    src: Scholastic,
    width: 200,
    height: 50,
    name: "Scholastic",
    id: 3,
  },
  {
    src: McGraw,
    width: 150,
    height: 50,
    name: "McGraw",
    id: 4,
  },
  {
    src: Pearson,
    name: "Pearson",
    width: 150,
    height: 50,
    id: 5,
  },
  {
    src: Penguin,
    name: "Penguin",
    width: 150,
    height: 50,
    id: 6,
  },
  {
    src: Reed,
    name: "Reed",
    width: 150,
    height: 30,
    id: 7,
  },
  {
    src: Thomson,
    name: "Thomson",
    width: 150,
    height: 23,
    id: 8,
  },
  {
    src: Wolters,
    name: "Wolters",
    width: 150,
    height: 33,
    id: 9,
  },
];

const Support = () => {
  return (
    <ul className="my-slider">
      {supportList.map(({ id, src, name, width, height }) => (
        <Image src={src} alt={name} width={width} height={height} />
      ))}
    </ul>
  );
};

export default Support;
