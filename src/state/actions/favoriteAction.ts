import { FavoriteActionTypes } from "../reducers/favoriteReducer";

export function addBook(book: any) {
    return {
        type: FavoriteActionTypes.ADDBOOK,
        book
    }
}