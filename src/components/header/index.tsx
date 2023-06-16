import React from "react";
import styles from "./index.module.css";
import Button from "../button";
import { NavLink } from "react-router-dom";

// Assets
import logo from "../../assets/logo.svg";

const Header: React.FC = ()=> {
    const navItem = [
        { id: 1, item: "home", linkTo: "/home"},
        { id: 2, item: "about", linkTo: "/about"},
        { id: 3, item: "pricing", linkTo: "/pricing"},
        { id: 4, item: "tokens", linkTo: "/tokens"},
        { id: 5, item: "blog", linkTo: "/blog"},
        { id: 6, item: "contact us", linkTo: "/contact"}
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

            <Button linkTo="#" bg="#0328EE" color="#FFFFFF">
                download app
            </Button>
        </header>
    );
}

export default Header;