export enum FavoriteActionTypes {
    ADDBOOKFAVORITE = "ADDBOOKFAVORITE",
    ADDAUTHOR = "ADDAUTHOR"
}

interface favoriteAddBookAction {
    type: FavoriteActionTypes.ADDBOOKFAVORITE,
    book: any
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
           return {...state, books: [...state.books, action.book]}


        default: return state
    }
}