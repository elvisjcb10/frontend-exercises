import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
const MainLayout=()=>{
    return(
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>

    );
}
export default MainLayout