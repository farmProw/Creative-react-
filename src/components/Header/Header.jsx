import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header =(props)=>{
    return(
       <header className={s.header}>
           <img src="https://memegenerator.net/img/instances/64572741.jpg" className={s.imge}/>
           {props.isAuth?props.user:<NavLink to='/login'>Login</NavLink>}
       </header>
    )
}

export default Header;