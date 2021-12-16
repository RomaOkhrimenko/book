import { FavoriteActionTypes } from "../reducers/favoriteReducer";

export function addBookFavorite(book: any) {
    return {
        type: FavoriteActionTypes.ADDBOOKFAVORITE,
        book
    }
}