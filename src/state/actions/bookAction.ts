import axios from "axios";
import { BookActionTypes } from "../reducers/bookReducer";

export function addBookAction(book:any) {
    return {
        type: BookActionTypes.ADD_BOOK,
        book
    }
}

export function fetchBestsellerAction() {
    return async (dispatch: any) => {
        const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=f05uiByA7w5g1caB7DDMLcXZExKcNKUM`)
        const jsonData = await response.data.results.books
        dispatch({
            type: BookActionTypes.ADD_BESTSELLER,
            bestseller: jsonData
        })
    }
}

export function addAuthorAction(author:any) {
    return {
        type: BookActionTypes.ADD_AUTHOR,
        author
    }
}