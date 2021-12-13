import { userReducer } from './userReducer';
import { combineReducers } from "redux";
import { favoriteReducer } from './favoriteReducer';

export const rootReducers = combineReducers({
    user: userReducer,
    favorite: favoriteReducer
})

export type RootState = ReturnType<typeof rootReducers>