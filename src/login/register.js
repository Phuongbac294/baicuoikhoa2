import style from './login.module.css';
import { useReducer, } from "react";
import reducer, { initState } from "./reducer";
import {addRegister, setLogin, setName, setPassword} from './action'

function Register() {
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state);
    const {name, password, use, users} = state
    const handleRegister = () => {
        dispatch(users(use))
    }

    return (
        <div className={style.Login}>
            <form className={style.LoginForm}>
                <input className={style.inputLogin} type='text' value={name} onChange={e=>{dispatch(setName(e.target.value))}} placeholder="Usename"/>
                <input className={style.inputLogin} type='password' value={password} onChange={e=>{dispatch(setPassword(e.target.value))}} placeholder="Password"/>
                <input className={style.inputLogin} type='password' value={password} onChange={e=>{dispatch(setPassword(e.target.value))}} placeholder="Confirm password"/>
                <button className={style.btn} onClick={handleRegister}>REGISTER</button>
            </form>
        </div>
    )
}

export default Register;