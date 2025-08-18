import Styles from "./styles.module.css"
import logo from "../../assets/images/logoFinder.png"

import { FaBars } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import type { NavItem } from "../../Models/NavItem";

const NavLinks: NavItem[] = [
    {name: "Inicio", href: "#", active: true},
    {name: "Produtos", href: "#"},
    {name: "Login", href: "#"},
    {name: "Favoritos", href: "#", icon: <FaHeart />},
    
]

export function Header() {
    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setisMobileMenuOpen(!isMobileMenuOpen)
    }

    const renderNavItems = () => {
        return NavLinks.map((i) => {
             return <li key={i.name} className={`${Styles.navList_item} ${i.active ? Styles.active : ""}`}><a href={i.href}>{i.icon ? i.icon : i.name}</a></li>
        })
    }

    return(
        <header className={Styles.headerContainer}>
        <nav className={Styles.headerNavBar}>
            <a href="#">
                <div className={Styles.navlogo}><img src={logo} alt="logo Finder" /></div>
            </a>
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
    )
}