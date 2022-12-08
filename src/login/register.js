import style from './login.module.css';
import { useContext} from 'react';
import {ShoppingCartContext} from '../context/ShoppingCartContext';


function Register() {
    const contai = useContext(ShoppingCartContext);
    console.log(Object.keys(contai.value.use)[2]);
    console.log(contai.value.useData);
    return (
        <div className={style.Login} >
            <form className={style.LoginForm}>
                <input className={style.inputLogin} type='text' name={Object.keys(contai.value.use)[0]} value={contai.value.use.name} onChange={contai.value.AddUser} placeholder='Usename'/>
                <input className={style.inputLogin} type='password' name={Object.keys(contai.value.use)[1]} value={contai.value.use.password} onChange={contai.value.AddUser} placeholder='Password'/>
                <input className={style.inputLogin} type='password' name={Object.keys(contai.value.use)[2]} value={contai.value.use.confimpassword} onChange={contai.value.AddUser} placeholder='ConfimPassword'/>
                <button className={style.btn} onClick={contai.RegisterUser}>LOGIN</button>
            </form>
        </div>
    )
}

export default Register;