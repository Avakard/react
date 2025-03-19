import { NavLink } from "react-router-dom";
import "../styles/navbar.css"
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () =>{
    return (
        <div>

        
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="documents">Документы</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
                <li><NavLink to="/jobs">Вакансии</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
            </ul>
        </nav>
        <ThemeSwitcher />
        </div>
    )
}

export default Navbar;