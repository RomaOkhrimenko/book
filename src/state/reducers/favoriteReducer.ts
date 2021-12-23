export enum FavoriteActionTypes {
    ADDBOOKFAVORITE = "ADDBOOKFAVORITE",
    ADDAUTHOR = "ADDAUTHOR"
}

interface favoriteAddBookAction {
    type: FavoriteActionTypes.ADDBOOKFAVORITE,
    book: any,
    id: number
}

interface FavoriteState {
    books: any[]
    authors: any[]
}

type FavoriteAction = favoriteAddBookAction

const initialState: FavoriteState = {
    books: [],
    authors: []
}

export const favoriteReducer = (state = initialState, action: FavoriteAction) => {
    switch(action.type) {
        case FavoriteActionTypes.ADDBOOKFAVORITE: 
           const newBook = state.books.find(e => action.id == e.id)
           if(newBook) {
               return {...state, books:[...state.books]}
           } else {
               return {...state, books: [...state.books, action.book]}
           }

        default: return state
    }
}