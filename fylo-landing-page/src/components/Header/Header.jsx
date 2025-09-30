
import style from './header.module.css'
import logo from '../../../images/logo.svg'
const Header=()=>{
    return(
        <header className={style.header}>
            <img src={logo} alt="" />
            <nav className={style.navbar}>
                <a href="">Features</a>
                <a href="">Team</a>
                <a href="">Sign in</a>
            </nav>
        </header>
    );
}
export default Header;