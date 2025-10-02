import style from './style.module.css';
const NavBar=()=>{
   
    return(
        <nav className={style.container}>
            <h2 className={style.title}>Where in  the World?</h2>
            <label className={style.mode} htmlFor="">
               <input  
                    type="checkbox" 
                />
               <p>Dark Mode</p>
            </label>
        </nav>
    );
}
export default NavBar