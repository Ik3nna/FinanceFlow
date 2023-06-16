import React from 'react';
import styles from "./index.module.css"
import Hstack from '../../layouts/hstack';
import Vstack from '../../layouts/vstack';
import Cards from '../../components/cards';
import Button from '../../components/button';

// Assets
import desktopLaptop from "../../assets/Apple Computers.svg";
import company from "../../assets/company.svg";
import ina from "../../assets/iPhones-ina.svg";
import rtt from "../../assets/rtt.svg";
import sndr from "../../assets/sndr.svg";
import sw from "../../assets/sw.svg";
import tc from "../../assets/tc.svg";
import group from "../../assets/group-phones.svg";

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
                    <Button bg="#0328EE" linkTo='#' color='#FFFFFF'>
                        download app
                    </Button>
                    <Button linkTo="/pricing" bg="rgba(255, 255, 255, 0.1)" color='#FFFFFF'>
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

            <article>
                <Vstack>
                    <Cards w="325px" h="295px" bg="#010D50">
                        <img src={sndr} alt="sndr" />

                        <h6>
                            Send & Receive
                        </h6>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat nulla suspendisse tortor aene.
                        </p>
                    </Cards>

                    <Cards w="325px" h="295px" bg="#010D50">
                        <img src={sw} alt="sndr" />

                        <h6>
                            100% secure wallet
                        </h6>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat nulla suspendisse tortor aene.
                        </p>
                    </Cards>
                </Vstack>

                <Cards w="477px" h="622px" bg="#0328EE">
                    <h6>
                        iOS & Android App
                    </h6>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In amet, morbi non at sed neque.
                    </p>

                    <img  className={styles.iphone} src={ina} alt="iphones" />
                </Cards>

                <Vstack>
                    <Cards w="325px" h="295px" bg="#010D50">
                        <img src={tc} alt="sndr" />

                        <h6>
                            trading chart
                        </h6>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat nulla suspendisse tortor aene.
                        </p>
                    </Cards>

                    <Cards w="325px" h="295px" bg="#010D50">
                        <img src={rtt} alt="sndr" />

                        <h6>
                            trading chart
                        </h6>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat nulla suspendisse tortor aene.
                        </p>
                    </Cards>
                </Vstack>
            </article>

            <Button linkTo="#" bg="#0328EE" color='#FFFFFF'>
                download app
            </Button>
        </section>

        <Hstack>
            <img src={group} alt="group-phones" />

            <Vstack>
                <h2 className={styles.header2}>
                    Earn daily rewards on your idle tokens
                </h2>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Feugiat nulla suspendisse tortor aene.
                </p>
            </Vstack>
        </Hstack>
    </main>
  )
}

export default Home