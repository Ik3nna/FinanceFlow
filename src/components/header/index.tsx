import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header: React.FC = ()=> {
    const navItem = [
        { id: 1, item: "home", linkTo: "/home"},
        { id: 2, item: "about", linkTo: "/about"},
        { id: 3, item: "tokens", linkTo: "/tokens"},
        { id: 4, item: "blog", linkTo: "/blog"},
        { id: 5, item: "contact us", linkTo: "/contact"}
    ]

    const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
        return `${isActive ? styles.activeLink : ""}`;
    };

    return(
        <header className={styles.header}>
            <img src={logo} alt="logo" />

            <nav>
                <ul>
                    {navItem.map((navlink)=>
                        <li key={navlink.id}>
                            <NavLink className={navLinkClass} to={navlink.linkTo}>
                                {navlink.item}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;