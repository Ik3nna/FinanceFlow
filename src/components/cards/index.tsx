import React from 'react'
import styles from "./index.module.css";

interface CardsProps {
    children: React.ReactNode,
    w: string,
    h: string,
    bg: string,
}

const Cards: React.FC<CardsProps> = ({ children, w, h, bg }) => {
  return (
   <section
    className={styles.cards}
    style={{
        width: `${w}`,
        height: `${h}`,
        backgroundColor: `${bg}`
    }}
   >
    {children}
   </section>
  )
}

export default Cards