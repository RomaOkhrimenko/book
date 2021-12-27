export enum FavoriteActionTypes {
    ADDBOOKFAVORITE = "ADDBOOKFAVORITE",
    ADDAUTHOR = "ADDAUTHOR"
}

export interface favoriteAddBookAction {
    type: FavoriteActionTypes.ADDBOOKFAVORITE,
    book: any,
    id: number
}