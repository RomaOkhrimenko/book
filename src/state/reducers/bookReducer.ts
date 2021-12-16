

interface initialState {
    book: any
    bestseller: any[]
    author: any
}

export enum BookActionTypes {
    ADD_BOOK = "ADD_BOOK",
    ADD_BESTSELLER = "ADD_BESTSELLER",
    ADD_AUTHOR = "ADD_AUTHOR"
}

interface addBookAction {
    type: BookActionTypes.ADD_BOOK,
    book: any
}

interface fetchBestsellerAction {
    type: BookActionTypes.ADD_BESTSELLER,
    bestseller: any
}

interface fetchAuthorAction {
    type: BookActionTypes.ADD_AUTHOR,
    author: any
}

type bookAction = addBookAction | fetchBestsellerAction | fetchAuthorAction

const initialState: initialState = {
    book: {},
    bestseller: [],
    author: []
}

export const bookReducer = (state = initialState, action: bookAction):initialState => {
    console.log('action',action);
    
    switch (action.type) {
        case BookActionTypes.ADD_BOOK:
            return {...state, book: action.book}

        case BookActionTypes.ADD_BESTSELLER:
            return {...state, bestseller: action.bestseller}

            case BookActionTypes.ADD_AUTHOR:
                return {...state, author: action.author}
            
        default:
            return state
    }
}