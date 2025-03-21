import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css"
import ThemeSwitcher from "./ThemeSwitcher";
import { isAuthenticated, logout } from "../services/auth";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useState } from "react";


export default function Navbar(){
    const navigate = useNavigate();
 /*   const dispatch = useAppDispatch();

    const isAuth = useAppSelector((state) => state.auth.isAuth)

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
*/
    function handleLogout(){
        logout();        
        navigate("/");
    }

    return (
        <div>

        
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="documents">Документы</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
                <li><NavLink to="/jobs">Вакансии</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
                {isAuthenticated() ? (
                        <li><button style={{ color:"white"}} onClick={handleLogout}>Выйти</button></li>
                    ) : (
                        <li><NavLink to="/login">Войти</NavLink></li>
                    )}
                    <li>!</li>
                
            </ul>
        </nav>
        <ThemeSwitcher />
        </div>
    )

}



//const Navbar = () =>{
 /*   return (
        <div>

        
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="documents">Документы</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
                <li><NavLink to="/jobs">Вакансии</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
                {isAuthenticated() ? (
                    <li><button onClick={handleLogout}>Выйти</button></li>
                ):(
                    <li><NavLink to="/login">Войти</NavLink></li>
                )}
                
            </ul>
        </nav>
        <ThemeSwitcher />
        </div>
    )*/
//}

//export default Navbar;