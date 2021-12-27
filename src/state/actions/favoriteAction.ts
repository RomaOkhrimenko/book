import { FavoriteActionTypes } from './../types/favoriteTypes';

export function addBookFavorite(book: any, id:number) {
    return {
        type: FavoriteActionTypes.ADDBOOKFAVORITE,
        book,
        id
    }
}