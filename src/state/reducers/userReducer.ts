export enum UserActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

interface LoginUserAction {
  type: UserActionTypes.LOGIN;
  payload: any;
}

interface LogoutUserAction {
  type: UserActionTypes.LOGOUT;
}

type UserAction = LoginUserAction | LogoutUserAction

interface UserState {
  user: any;
}

const initialState: UserState = {
  user: null
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, user: action.payload };
    case UserActionTypes.LOGOUT:
      return { ...state, user: null };

    default:
      return state;
  }
};
