export interface ICard {
  _id: string;
  book_image: string;
  title: string;
  author: string;
  category?: string;
}

export interface IBook {
  list_name: string;
  books: ICard[];
}

export interface IListName {
  list_name: string;
}
