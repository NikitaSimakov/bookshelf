export interface ICard {
  _id: string;
  book_image: string;
  title: string;
  author: string;
  category: string;
}

export interface IBooks {
  list_name: string;
  books: ICard[];
}

export interface IListName {
  list_name: string;
}

export interface IBook {
  _id: string;
  title: string;
  author: string;
  description: string;
  book_image: string;
  list_name: string;
  buy_links: { name: string; url: string }[];
}
