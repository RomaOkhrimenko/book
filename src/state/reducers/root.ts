import { userReducer } from './userReducer';
import { combineReducers } from "redux";
import { favoriteReducer } from './favoriteReducer';
import { bookReducer } from './bookReducer';

export const rootReducers = combineReducers({
    user: userReducer,
    favorite: favoriteReducer,
    book: bookReducer
})

export type RootState = ReturnType<typeof rootReducers>