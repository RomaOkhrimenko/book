import { componentActionTypes } from "../reducers/componentReducer";


export function navbarAction(navbarPhone:boolean) {
    return {
        type: componentActionTypes.NAVBAR_PHONE,
        navbarPhone
    }
} 