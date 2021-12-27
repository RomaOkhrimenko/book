import { addBookAction, BookActionTypes, fetchAuthorAction, fetchBestsellerAction, Iauthor, Ibook, loaderAction } from "../types/bookTypes";

interface initialState {
  book: Ibook;
  bestseller: any[];
  author: Iauthor;
  loader: boolean;
}

type bookAction =
  | addBookAction
  | fetchBestsellerAction
  | fetchAuthorAction
  | loaderAction;

const initialState: initialState = {
  book: {id: 0, title: '', author: '', image: '', liked: false, desc: ''},
  bestseller: [],
  author: {id: 1, desc: '', firstName: '', lastName: '', fullName: '', image: '', imagelarge: ''},
  loader: false,
};

export const bookReducer = (
  state = initialState,
  action: bookAction
): initialState => {

  switch (action.type) {
    case BookActionTypes.ADD_BOOK:
      return { ...state, book: action.book };

    case BookActionTypes.ADD_BESTSELLER:
      return { ...state, bestseller: action.bestseller };

    case BookActionTypes.ADD_AUTHOR:
      console.log(action.author);

      return { ...state, author: action.author };

    case BookActionTypes.LOADER:
      return { ...state, loader: action.loader };

    default:
      return state;
  }
};
