import React from 'react';
import styles from "./index.module.css";
import Hstack from '../../layouts/hstack';
import Vstack from '../../layouts/vstack';
import Cards from '../cards';
import { FiInstagram } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import Button from '../button';

// assets 
import logo from "../../assets/logo.svg";
import appStore from "../../assets/app-store.svg";
import playStore from "../../assets/play-store.svg";

const Footer: React.FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return `${isActive ? styles.activeLink : ""}`;
  };

  const navItem1 = [
    { id: 1, item: "home", linkTo: "/home"},
    { id: 2, item: "about", linkTo: "/about"},
    { id: 3, item: "pricing", linkTo: "/pricing"}
  ]

  const navItem2 = [
    { id: 4, item: "tokens", linkTo: "/tokens"},
    { id: 5, item: "blog", linkTo: "/blog"},
    { id: 6, item: "contact us", linkTo: "/contact"}
  ]

  return (
    <footer className={styles.footer}>
      <Hstack>
        <img src={logo} alt="logo" onClick={()=> window.location.reload()} />

        <div className={styles.icons}>
          <div>
            <FiInstagram />
          </div>

          <div>
            <AiOutlineFacebook />
          </div>
            
          <div>
            <BiLogoLinkedin />
          </div>
        </div>
      </Hstack>

      <Hstack>
        <Vstack>
          <h5>
            menu
          </h5>

          <hr />

          <nav>
            <ul>
              {navItem1.map((navlink)=>
                <li key={navlink.id}>
                  <NavLink className={navLinkClass} to={navlink.linkTo}>
                    {navlink.item}
                  </NavLink>
                </li>
              )}
            </ul>

            <ul>
              {navItem2.map((navlink)=>
                <li key={navlink.id}>
                  <NavLink className={navLinkClass} to={navlink.linkTo}>
                    {navlink.item}
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </Vstack>

        <Cards bg="rgba(255, 255, 255, 0.10)" className="footerCard">
          <h5>
            Download our Application
          </h5>

          <p>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Mauris sed nulla integer 
          </p>

          <div className={styles.btnContainer}>
            <Button linkTo="#" bg="#0328EE" color='#FFFFFF'>
              <span>
                <img src={appStore} alt="app-store" />
              </span> 
              app store
            </Button>

            <Button linkTo="#" bg="#0328EE" color='#FFFFFF'>
              <span>
                <img src={playStore} alt="play-store" />
              </span> 
              play store
            </Button>
          </div>
        </Cards>
      </Hstack>

      <hr />

      <p className={styles.copywright}>
        All rights reserved &copy; {new Date().getFullYear()}{" "}Nduks
      </p>
    </footer>
  )
}

export default Footer