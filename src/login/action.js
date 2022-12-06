import { ADD_REGISTER , SET_LOGIN, SET_NAME, SET_PASSWORD} from "./constants"

export const addRegister = (name, passwoord) => {
    return {
        type: ADD_REGISTER,
        name,
        passwoord,
    }
}

export const setLogin=(usename, usepasswoord) => {
    return {
        type: SET_LOGIN,
        name : usename , 
        passwoord: usepasswoord
    }
}

export const setName = payload => {
    return {
        type: SET_NAME,
        payload
    }
}
export const setPassword = payload => {
    return {
        type: SET_PASSWORD,
        payload
    }
}