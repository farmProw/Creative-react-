import s from './Aside.module.css';
import NavBar from "./NavBar/NavBar";

const Aside =(props)=>{

    return(
        <aside className={s.asideBar}>
        <NavBar state = {props.state}/>
        </aside>
    )
}

export default Aside;