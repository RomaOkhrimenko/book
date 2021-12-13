import { UserActionTypes } from "../reducers/userReducer";

export function loginUser(user: any) {
    return {
        type: UserActionTypes.LOGIN,
        payload: user
    }
}

export function logoutUser() {
    return {
        type: UserActionTypes.LOGOUT
    }
}
