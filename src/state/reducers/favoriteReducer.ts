export enum FavoriteActionTypes {
    ADDBOOK = "ADDBOOK",
    ADDAUTHOR = "ADDAUTHOR"
}

interface favoriteAddBookAction {
    type: FavoriteActionTypes.ADDBOOK,
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
        case FavoriteActionTypes.ADDBOOK: 
           return {...state, books: [...state.books, action.book]}


        default: return state
    }
}