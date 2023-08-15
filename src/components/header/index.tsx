import React, { useState } from "react";
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
        { id: 5, item: "contact us", linkTo: "/contact"}
    ]

    const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
        return `${isActive ? styles.activeLink : ""}`;
    };

    const [active, setActive] = useState(false);

    return(
        <header className={`${styles.header} ${active ? styles.active : ""}`}>
            <img src={logo} alt="logo" onClick={()=> window.location.reload()} />

            <nav>
                <ul>
                    {navItem.map((navlink)=>
                        <li key={navlink.id}>
                            <NavLink className={navLinkClass} onClick={()=>setActive(false)} to={navlink.linkTo}>
                                {navlink.item}
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>

            <Button linkTo="#" bg="#0328EE" color="#FFFFFF">
                download app
            </Button>

            <div className={styles.overlay}></div>
                    
            <div className={styles.hamburger} onClick={()=>setActive(!active)}>
                <div className={styles.bar}></div>
            </div>
        </header>
    );
}

export default Header;