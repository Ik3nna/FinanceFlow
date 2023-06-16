import React from 'react';
import styles from "./index.module.css"
import Hstack from '../../layouts/hstack';
import Vstack from '../../layouts/vstack';
import Button from '../../components/button';

// Assets
import desktopLaptop from "../../assets/Apple Computers.svg";
import company from "../../assets/company.svg";


const Home: React.FC = ()=> {
  return (
    <main className={styles.main}>
        <section className={styles.container}>
            <article>
                <h1>
                    Buy, trade, and hold 350+ cryptocurrencies
                </h1>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Feugiat nulla suspendisse tortor aenean dis placerat.
                </p>

                <div className={styles.btnContainer}>
                    <Button bg="#0328EE" color='#FFFFFF'>
                        download app
                    </Button>
                    <Button linkTo="pricing" bg="rgba(255, 255, 255, 0.1)" color='#FFFFFF'>
                        view pricing
                    </Button>
                </div>
            </article>

            <img src={desktopLaptop} className={styles.laptop} alt="laptop" />
        </section>

        <section>
            <article>
                <p className={styles.subText}>
                    Finance flow has been featured on
                </p>

                <img src={company} alt="company" />
            </article>
        </section>

        <section>
            <h2>
                Build your crypto portfolio
            </h2>

            <p className={styles.subText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Feugiat nulla suspendisse tortor aene.
            </p>

            
        </section>
    </main>
  )
}

export default Home