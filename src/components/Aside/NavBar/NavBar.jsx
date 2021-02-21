import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./../Friends/Friends";
const NavBar =(props)=>{
    // let friends = props.state.asideBar.map(e=><Friends friends = {e.friends}/>)
    return(
        <nav className={s.NavBar}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            <div className={s.item}><NavLink to="/friends" activeClassName={s.active}>Friends</NavLink></div>
            {/*{friends}*/}
        </nav>
    )
};
export default NavBar;