import React from 'react';
import styles from "./index.module.css";

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  }

  return (
    <form className={styles.component} onSubmit={handleSubmit}>
      <section className={styles.subComponents}>
        <div>
          <label htmlFor='name'>Name</label>

          <input type='text' placeholder='Full Name' />
        </div>

        <div>
          <label htmlFor='email'>Email</label>

          <input type='email' placeholder='email@example.com' />
        </div>
      </section>

      <section className={styles.subComponents}>
        <div>
          <label htmlFor='company'>Company</label>

          <input type='text' placeholder='Company Name' />
        </div>

        <div>
          <label htmlFor='subject'>Subject</label>

          <input type='text' placeholder='How can we help?' />
        </div>
      </section>

      <section className={styles.subComponents}>
        <div>
          <label htmlFor='message'>Message</label>

          <input type="text" placeholder='Your Message' />
        </div>
      </section>

      <button type="submit">
        SEND MESSAGE
      </button>
    </form>
  )
}

export default Form