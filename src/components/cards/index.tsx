import React from 'react'
import styles from "./index.module.css";
import moreStyles from "../../pages/home/index.module.css"
import footerStyles from "../footer/index.module.css";
import aboutStyles from "../../pages/about/index.module.css";
import pricingStyles from "../../pages/pricing/index.module.css";

interface CardsProps {
  children: React.ReactNode,
  bg: string,
  className?: any
}

const Cards: React.FC<CardsProps> = ({ children, bg, className }) => {
  return (
   <article
    className={`
      ${styles.cards} 
      ${moreStyles[className]} 
      ${footerStyles[className]}
      ${aboutStyles[className]}
      ${pricingStyles[className]}
    `}
    style={{
      backgroundColor: `${bg}`
    }}
   >
    {children}
   </article>
  )
}

export default Cards