import style from './login.module.css';
import { useState, } from "react";


function Register() {
    const [userData, setUserData] = useState([])
    const [user, setUser] = useState({name:'', password:'', confimPassword:''})
    const handleRegister = () => {
        setUserData(prev => [...prev, user])
        setUser({name:'', password:''})
        console.log(userData);
    }
    
    return (
        <div className={style.Login}>
            <form className={style.LoginForm}>
                <input className={style.inputLogin} type='text' value={user.name} onChange={e=>{setUser({...user, name :e.target.value})}} placeholder="Usename"/>
                <input className={style.inputLogin} type='password' value={user.password} onChange={e=>{setUser({...user, password:e.target.value})}} placeholder='Password'/>
                <input className={style.inputLogin} type='password' value={user.confimPassword} onChange={e=>{setUser({...user, confimPassword:e.target.value})}} placeholder="Confirm password"/>
                <button className={style.btn} onClick={handleRegister}>REGISTER</button>
            </form>
            <div>
                {userData.map(item =>(
                    <li>{item.name}</li>
                ))}

            </div>
        </div>
    )
}

export default Register;