import React from 'react';
import styles from "./index.module.css";
import Form from '../../components/form';
import Vstack from '../../layouts/vstack';

// assets 
import message from "../../assets/message.svg";

const Contact: React.FC = () => {
  return (
    <section className={styles.component}>
        <article>
          <h1>Get in touch</h1>

          <div className={styles.hstack}>
            <Form />

            <Vstack>
              <h4>Want to reach us directly?</h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Id dui pharetra elementum sit id sagittis non donec egestas.
              </p>

              <Vstack>
                <div>
                  <img src={message} alt="message" />

                  <a href="mailto:contact@example.com">
                    contact@example.com
                  </a>
                </div>

                <div>
                  <img src={message} alt="message" />

                  <a href="mailto:support@example.com">
                    support@example.com
                  </a>
                </div>

                <div>
                  <img src={message} alt="message" />

                  <a href="mailto:press@example.com">
                    press@example.com
                  </a>
                </div>
              </Vstack>
            </Vstack>
          </div>
        </article>
    </section>
  )
}

export default Contact;