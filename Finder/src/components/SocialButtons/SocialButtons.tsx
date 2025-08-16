import Styles from "./styles.module.css"

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import type {NavItem} from "../../Models/NavItem"

export function SocialButtons() {
    const navItems: NavItem[] = [
        {href: "#", icon: <FaInstagram/>},
        {href: "#", icon: <FaWhatsapp/>},
        {href: "#", icon: <FaEnvelope/>},

    ]

    const renderNavItems = () => {
            return navItems.map((i) => {
                return <li className={Styles.social_buttons}><a href={i.href}>{i.icon}</a></li>
            })
        }
    return(
        <ul className={Styles.social}>
         {renderNavItems()}
        </ul>
    )
}