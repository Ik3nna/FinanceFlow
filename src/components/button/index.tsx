import React from 'react';
import { Link } from "react-router-dom";
import styles from "./index.module.css";

interface ButtonProps {
  children: React.ReactNode;
  linkTo?: string,
  bg: string,
  color: string
}

const Button: React.FC<ButtonProps> = ({ children, linkTo, bg, color }) => {
  return (
    <Link 
      to={`/${linkTo}`} 
      className={styles.btn}
      style={{
        backgroundColor: `${bg}`,
        color: `${color}`
      }}
    >
      {children}
    </Link>
  )
}

export default Button