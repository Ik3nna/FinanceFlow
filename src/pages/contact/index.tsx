import React from 'react';
import styles from "./index.module.css";
import Form from '../../components/form';

const Contact: React.FC = () => {
  return (
    <section className={styles.component}>
        <article>
            <h1>Get in touch</h1>

            <div>
                <Form />
            </div>
        </article>
    </section>
  )
}

export default Contact;