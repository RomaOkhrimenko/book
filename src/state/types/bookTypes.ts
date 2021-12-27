export enum BookActionTypes {
  ADD_BOOK = "ADD_BOOK",
  ADD_BESTSELLER = "ADD_BESTSELLER",
  ADD_AUTHOR = "ADD_AUTHOR",
  LOADER = "LOADER",
}

export interface addBookAction {
  type: BookActionTypes.ADD_BOOK;
  book: any;
}

export interface fetchBestsellerAction {
  type: BookActionTypes.ADD_BESTSELLER;
  bestseller: any;
}

export interface fetchAuthorAction {
  type: BookActionTypes.ADD_AUTHOR;
  author: any;
}

export interface loaderAction {
  type: BookActionTypes.LOADER;
  loader: boolean;
}

export interface Ibook {
    id: number;
    title: string;
    author: string;
    image: string;
    liked: boolean;
    desc: string;
}

export interface Iauthor{
    id:number
    desc: string;
    firstName: string;
    lastName: string;
    fullName: string;
    image: string;
    imagelarge: string;
}
