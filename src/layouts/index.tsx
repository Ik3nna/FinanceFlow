import React from 'react'
import styles from "./index.module.css";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default Layout;