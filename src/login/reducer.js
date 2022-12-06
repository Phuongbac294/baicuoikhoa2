import { ADD_REGISTER, SET_LOGIN, SET_NAME, SET_PASSWORD } from "./constants"
// import { Reducer } from "react"

export const initState = {
    name: '',
    password: '',
    use : {name: '', password:''},
    users: [
        {   name : 'Quốc',
            password : 'Q1234567',
            email : 'quoc@gmail.com',
            tel : '0912345678'
        },
        {   name : 'Linh',
            password : 'L1234567',
            email : 'linh@gmail.com',
            tel : '0912345679'
        },
        {   name : 'Phương',
            password : 'p1234567',
            email : 'phuong@gmail.com',
            tel : '0912345680'
        }
    ]
}


const reducer = (state, action) => {
    
    switch (action.type) {
        case ADD_REGISTER:
            return  {
                ...state,
                users: initState.use
            }
            break;
        case SET_LOGIN:
            return  {
                use : { name : action.name, password: action.password}
            }
            break;
        case SET_NAME:
            return  {
                ...state,
                name : action.payload
                
            }
            
            break;
        case SET_PASSWORD:
            return  {
                ...state,
                password: action.payload
            }
            // console.log(password);
            break;
        default:
            break;
    }
}

export default reducer;