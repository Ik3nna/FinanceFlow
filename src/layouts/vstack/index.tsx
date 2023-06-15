import React from 'react'
import styles from "./index.module.css";
import { StackProps } from '../stack';

const Vstack: React.FC<StackProps> = ({ children }) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}

export default Vstack;