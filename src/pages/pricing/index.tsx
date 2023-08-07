import React from 'react';
import styles from "./index.module.css"
import Cards from '../../components/cards';
import Hstack from '../../layouts/hstack';
import Vstack from '../../layouts/vstack';
import Button from '../../components/button';

// assets
import snr from "../../assets/sndr.svg";
import tc from "../../assets/tc.svg";
import sw from "../../assets/sw.svg";
import rtt from "../../assets/rtt.svg";

const Pricing: React.FC = () => {
  return (
    <section className={styles.container}>
      <article>
        <h1>Pricing</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
        </p>

        <Hstack>
          <div className={styles.subcontainers}>
            <img src={snr} alt="snr" />

            <p>Send & receive</p>
          </div>

          <div className={styles.subcontainers}>
            <img src={tc} alt="tc" />
            
            <p>Trading Charts</p>
          </div>

          <div className={styles.subcontainers}>
            <img src={sw} alt="sw" />
            
            <p>Wallet</p>
          </div>

          <div className={styles.subcontainers}>
            <img src={rtt} alt="rtt" />
            
            <p>Real Time Trading</p>
          </div>
        </Hstack>
      </article>

      <article>
          <Cards bg="#010D50" className="pricingCards">
            <div className={styles.tags}>Basic</div>

            <h2>$ 100 USD</h2>

            <p>
              Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
            </p>

            <div>
              <h4>FEATURES</h4>

              <Vstack>
                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Everything included in Basic</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Trading up to $1M per month</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Windows & macOS App</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Premium Support</p>
                </div>
              </Vstack>
            </div>

            <Button linkTo="/contact" bg="#0328EE" color="#FFF">
              contact us
            </Button>
          </Cards>

          <Cards bg="#010D50" className="pricingCards">
            <div className={styles.tags}>Pro</div>

            <h2>$ 100 USD</h2>

            <p>
              Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
            </p>

            <div>
              <h4>FEATURES</h4>

              <Vstack>
                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Everything included in Pro</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Trading up to $1M per month</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Windows & macOS App</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Premium Support</p>
                </div>
              </Vstack>
            </div>

            <Button linkTo="/contact" bg="#0328EE" color="#FFF">
              contact us
            </Button>
          </Cards>

          <Cards bg="#010D50" className="pricingCards">
            <div className={styles.tags}>Expert</div>

            <h2>$ 100 USD</h2>

            <p>
              Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.
            </p>

            <div>
              <h4>FEATURES</h4>

              <Vstack>
                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Everything included in Expert</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Trading up to $1M per month</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Windows & macOS App</p>
                </div>

                <div className={styles.dotContainer}>
                  <div className={styles.dot}></div>
                  <p>Premium Support</p>
                </div>
              </Vstack>
            </div>

            <Button linkTo="/contact" bg="#0328EE" color="#FFF">
              contact us
            </Button>
          </Cards>
      </article>
    </section>
  )
}

export default Pricing;