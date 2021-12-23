interface initialState {
  book: any;
  bestseller: any[];
  author: any;
  loader: boolean;
}

export enum BookActionTypes {
  ADD_BOOK = "ADD_BOOK",
  ADD_BESTSELLER = "ADD_BESTSELLER",
  ADD_AUTHOR = "ADD_AUTHOR",
  LOADER = "LOADER",
}

interface addBookAction {
  type: BookActionTypes.ADD_BOOK;
  book: any;
}

interface fetchBestsellerAction {
  type: BookActionTypes.ADD_BESTSELLER;
  bestseller: any;
}

interface fetchAuthorAction {
  type: BookActionTypes.ADD_AUTHOR;
  author: any;
}

interface loaderAction {
  type: BookActionTypes.LOADER;
  loader: boolean;
}

type bookAction =
  | addBookAction
  | fetchBestsellerAction
  | fetchAuthorAction
  | loaderAction;

const initialState: initialState = {
  book: {},
  bestseller: [],
  author: [],
  loader: false,
};

export const bookReducer = (
  state = initialState,
  action: bookAction
): initialState => {
  console.log("action", action);

  switch (action.type) {
    case BookActionTypes.ADD_BOOK:
      return { ...state, book: action.book };

    case BookActionTypes.ADD_BESTSELLER:
      return { ...state, bestseller: action.bestseller };

    case BookActionTypes.ADD_AUTHOR:
      return { ...state, author: action.author };

    case BookActionTypes.LOADER:
      return { ...state, loader: action.loader };

    default:
      return state;
  }
};
