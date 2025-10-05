import { Link } from 'react-router-dom'; 
import Styles from "./styles.module.css";
import logo from "../../assets/images/logoFinder.png";

import { FaBars, FaHeart } from "react-icons/fa";
import { useState } from "react";
import type { NavItem } from "../../Models/NavItem";

const NavLinks: NavItem[] = [
    { name: "Inicio", href: "/", active: true },
    { name: "Produtos", href: "/products" },
    { name: "Login", href: "/login" },
    { name: "Favoritos", href: "/favorites", icon: <FaHeart /> },
];

export function Header() {
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen)
    }

    const renderNavItems = () => {
        return NavLinks.map((i) => {
            return (
                <li key={i.name} className={`${Styles.navList_item} ${i.active ? Styles.active : ""}`}>
                    <Link to={i.href}>{i.icon ? i.icon : i.name}</Link>
                </li>
            );
        });
    }

    return (
        <header className={Styles.headerContainer}>
            <nav className={Styles.headerNavBar}>
                <Link to="/"> 
                    <div className={Styles.navlogo}><img src={logo} alt="logo Finder" /></div>
                </Link>
                <ul className={Styles.navList}>
                    {renderNavItems()}
                </ul>
                <button onClick={toggleMobileMenu} className={Styles.btn_Mobile}>
                    <i><FaBars /></i>
                </button>
            </nav>
            {isMobileMenuOpen &&
                <ul className={Styles.navList_Mobile}>
                    {renderNavItems()}
                </ul>
            }
        </header>
    );
}