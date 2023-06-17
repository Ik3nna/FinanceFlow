import React from 'react'
import styles from "./index.module.css";
import { StackProps } from '../stack';

const Hstack: React.FC<StackProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Hstack;