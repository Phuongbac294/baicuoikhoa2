
import style from './login.module.css';
import { useReducer, useState } from "react";
import reducer, { initState } from "./reducer";
import { REGISTER, LOGIN,} from "./constants";
import {addRegister, setLogin, setName, setPassword} from './action'


function Login() {
   
    const [state, dispatch] = useReducer(reducer, initState)
    const {name, password, use, users} = state
    // console.log(state);
    const [usename, setUsename] = useState({name:'', password:''})

    const handleLogin = () => {
        return (
            dispatch(setLogin(name,password))
            // setUsename({name: name, password: password})

        )
    }
   console.log(setLogin);
    return (
        <div className={style.Login}>
            <form className={style.LoginForm}>
                <input className={style.inputLogin} type='text' value={name} onChange={e=>{dispatch(setName(e.target.value))}} placeholder='Usename'/>
                <input className={style.inputLogin} type='password' value={password} onChange={e=>{dispatch(setPassword(e.target.value))}} placeholder='Password'/>
                <button className={style.btn} onClick={handleLogin}>LOGIN</button>
            </form>
        </div>
    )
}


export default Login;