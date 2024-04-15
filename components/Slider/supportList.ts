import Planeta from "../../public/support/Grupo_Planeta_logo.svg";
import Hachette from "../../public/support/Logo_Hachette_Livre_Actuel.svg";
import Scholastic from "../../public/support/Logo_Scholastic.svg";
import McGraw from "../../public/support/McGraw-Hill_Education_(jusqu'en_2013).svg";
import Pearson from "../../public/support/Pearson_logo.svg";
import Penguin from "../../public/support/Penguin_Random_House_201x_logo.svg";
import Reed from "../../public/support/Reed_Elsevier_Logo.svg";
import Thomson from "../../public/support/Thomson_Reuters_logo.svg";
import Wolters from "../../public/support/Wolters_Kluwer_Logo.svg";

const supportList = [
  {
    src: Planeta,
    name: "Planeta",
    id: 1,
    width: 120,
    height: 50,
    link: "https://www.planeta.es/",
  },
  {
    src: Hachette,
    name: "Hachette",
    width: 100,
    height: 32,
    id: 2,
    link: "https://www.hachette.de/",
  },
  {
    src: Scholastic,
    width: 200,
    height: 32,
    name: "Scholastic",
    id: 3,
    link: "https://export.scholastic.com/en",
  },
  {
    src: McGraw,
    width: 110,
    height: 32,
    name: "McGraw",
    id: 4,
    link: "https://www.mheducation.com/",
  },
  {
    src: Pearson,
    name: "Pearson",
    width: 100,
    height: 32,
    id: 5,
    link: "https://www.pearson.com/",
  },
  {
    src: Penguin,
    name: "Penguin random house",
    width: 60,
    height: 32,
    id: 6,
    link: "https://www.penguinrandomhouse.com/",
  },
  {
    src: Reed,
    name: "Reed Elsevier",
    width: 170,
    height: 32,
    id: 7,
    link: "https://www.relx.com/",
  },
  {
    src: Thomson,
    name: "Thomson Reuters",
    width: 200,
    height: 30,
    id: 8,
    link: "https://www.thomsonreuters.com/en.html",
  },
  {
    src: Wolters,
    name: "Wolters",
    width: 150,
    height: 32,
    id: 9,
    link: "https://www.wolterskluwer.com/",
  },
];

export default supportList;
