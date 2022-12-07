
import style from './login.module.css';
import { useReducer, useState } from "react";
// import reducer, { initState } from "./reducer";
// import { REGISTER, LOGIN,} from "./constants";
// import {addRegister, setLogin, setName, setPassword} from './action'


function Login() {
    
    const [use, setUse] = useState({})
    const [user, setUser] = useState({name:'', password:''})
    

    const handleLogin = () => {
        setUse(prev => {
            const newUse = user
            const jsonUse = JSON.stringify(newUse)
            console.log(jsonUse);
            return jsonUse
        })
    }

    console.log(user);    
    console.log(use);

    return (
        <div className={style.Login} onClick={handleLogin}>
            <form className={style.LoginForm}>
                <input className={style.inputLogin} type='text' value={user.name} onChange={e=>{setUser({...user, name :e.target.value})}} placeholder='Usename'/>
                <input className={style.inputLogin} type='password' value={user.password} onChange={e=>{setUser({...user, password:e.target.value})}} placeholder='Password'/>
                <button className={style.btn} onClick={handleLogin}>LOGIN</button>
            </form>
        </div>
    )
}


export default Login;