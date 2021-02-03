import s from './Header.module.css';

const Header =(props)=>{
    return(
       <header className={s.header}>
           <img src="https://memegenerator.net/img/instances/64572741.jpg" className={s.imge}/>

       </header>
    )
}

export default Header;