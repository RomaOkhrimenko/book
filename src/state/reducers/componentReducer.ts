
export enum componentActionTypes {
    NAVBAR_PHONE = "NAVBAR_PHONE"
}

interface navbarAction {
    type: componentActionTypes.NAVBAR_PHONE,
    navbarPhone: boolean
}

type componentAction = navbarAction

interface navbarState {
    navbarPhone: boolean
}
const initialState : navbarState = {
    navbarPhone: false
}

export const componentReducer = (state = initialState, action: componentAction) => {
    switch (action.type) {
        case componentActionTypes.NAVBAR_PHONE:
            return {...state, navbarPhone: action.navbarPhone}
            
    
        default:
            return state
    }
}