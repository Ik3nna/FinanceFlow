import React from 'react';
import styles from "./index.module.css";
import Table from '../../components/table';

const Tokens: React.FC = () => {
  return (
    <section className={styles.container}>
      <article>
        <h1>Tokens</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
        </p>
      </article>

      <article>
        <Table />
      </article>
    </section>
  )
}

export default Tokens