import { NavLink } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () =>{
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="documents">Документы</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
                <li><NavLink to="/jobs">Вакансии</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;