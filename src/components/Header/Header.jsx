import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header =(props)=>{
    return(
       <header className={s.header}>
           <img src="https://memegenerator.net/img/instances/64572741.jpg" className={s.imge}/>
           {props.isAuth?<span><span>{props.user}</span><button onClick={props.Logout}>LOGOUT</button></span>:<NavLink to='/login'>LOGIN</NavLink>}
       </header>
    )
}

export default Header;