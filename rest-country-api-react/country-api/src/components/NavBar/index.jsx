import { Link } from 'react-router-dom';
import style from './style.module.css';
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useState ,useEffect} from 'react';

const NavBar=()=>{
    const [dark,setDark]=useState(false);
    const handleChangeColor=()=>{
        setDark(!dark);
    }
    useEffect(() => {
        if (dark) {
        document.body.classList.add("dark");
        } else {
        document.body.classList.remove("dark");
        }
    }, [dark]);
    return(
        <nav className={style.container}>
            <Link to={"/"}>
                <h2  className={style.title}>Where in  the World?</h2>
            </Link>
            <label onClick={handleChangeColor} className={style.mode} htmlFor="">
               {!dark? <FaRegMoon/>:<FaMoon/> }
               <p>Dark Mode</p>
            </label>
        </nav>
    );
}
export default NavBar