
import style from './login.module.css';
import { useContext} from 'react';
import {ShoppingCartContext} from '../context/ShoppingCartContext';


function Login() {
    const contai = useContext(ShoppingCartContext);
    console.log(Object.keys(contai.value.use)[2]);
    console.log(contai.value.login);
    return (
        <div className={style.Login} >
            <form className={style.LoginForm}>
                <input className={style.inputLogin} type='text' name={Object.keys(contai.value.use)[0]} value={contai.value.use.name} onChange={contai.value.AddUser} placeholder='Usename'/>
                <input className={style.inputLogin} type='password' name={Object.keys(contai.value.use)[1]} value={contai.value.use.password} onChange={contai.value.AddUser} placeholder='Password'/>
                <button className={style.btn} onClick={contai.LoginUser}>LOGIN</button>
            </form>
        </div>
    )
}


export default Login;