import { FavoriteActionTypes } from "../reducers/favoriteReducer";

export function addBookFavorite(book: any, id:number) {
    return {
        type: FavoriteActionTypes.ADDBOOKFAVORITE,
        book,
        id
    }
}