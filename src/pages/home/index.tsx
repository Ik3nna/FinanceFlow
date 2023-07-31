import React from 'react';
import styles from "./index.module.css"
import Hstack from '../../layouts/hstack';
import Vstack from '../../layouts/vstack';
import Cards from '../../components/cards';
import Button from '../../components/button';
import Slider from '../../components/slider';
import Footer from '../../components/footer';

// Assets
import desktopLaptop from "../../assets/Apple Computers.svg";
import company from "../../assets/company.svg";
import ina from "../../assets/iPhones-ina.svg";
import rtt from "../../assets/rtt.svg";
import sndr from "../../assets/sndr.svg";
import sw from "../../assets/sw.svg";
import tc from "../../assets/tc.svg";
import group from "../../assets/group-phones.svg";
import bse from "../../assets/256.svg";
import fst from "../../assets/fst.svg";
import lfim from "../../assets/lfim.svg";
import ds from "../../assets/ds.svg";
import pd from "../../assets/pd.svg";
import ug from "../../assets/ug.svg";
import banner from "../../assets/banner.svg";
import alex from "../../assets/alex.svg";
import appStore from "../../assets/app-store.svg"
import iPhones from "../../assets/iPhones.svg";
import playStore from "../../assets/play-store.svg";
import samsung from "../../assets/Samsung Galaxys.svg"

const Home: React.FC = ()=> {
    const currMonth = new Date().toLocaleString([], {
        month: 'long',
    });

    const currDay = new Date().getDate();

    const currYear = new Date().getFullYear();

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
                    <Cards bg="#010D50" className="sndr">
                        <img src={sndr} alt="sndr" />

                        <h6>
                            Send & Receive
                        </h6>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat nulla suspendisse tortor aene.
                        </p>
                    </Cards>

                    <Cards bg="#010D50" className="sndr">
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

                <Cards bg="#0328EE" className="iosCard">
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
                    <Cards bg="#010D50" className="sndr">
                        <img src={tc} alt="sndr" />

                        <h6>
                            trading chart
                        </h6>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Feugiat nulla suspendisse tortor aene.
                        </p>
                    </Cards>

                    <Cards bg="#010D50" className="sndr">
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

            <article>
                <h2 className={styles.header2}>
                    Earn daily rewards on your idle tokens
                </h2>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Feugiat nulla suspendisse tortor aene.
                </p>

                <article className={styles.shiftContainer}> 
                    <div className={styles.shift}>
                        <img src={lfim} alt="lfim" />

                        <p className={styles.text}>
                            Lowest fees in market
                        </p>
                    </div>

                    <div className={styles.shift}>
                        <img src={fst} alt="fst" />

                        <p className={styles.text}>
                            Fast and secure transactions
                        </p>
                    </div>

                    <div className={styles.shift}>
                        <img src={bse} alt="bse" />

                        <p className={styles.text}>
                            256-bit secure encryption
                        </p>
                    </div>
                </article>
            </article>
        </Hstack>

        <section className={styles.container}>
            <article>
                <h2 className={styles.header2}>
                    Earn daily rewards on your idle tokens
                </h2>

                <div className={styles.shiftContainer}> 
                    <div className={styles.shift}>
                        <img src={pd} alt="pd" />

                        <p className={styles.text}>
                            100% Private data
                        </p>
                    </div>

                    <div className={styles.shift}>
                        <img src={ug} alt="ug" />

                        <p className={styles.text}>
                            99.99% Uptime guarantee
                        </p>
                    </div>

                    <div className={styles.shift}>
                        <img src={ds} alt="ds" />

                        <p className={styles.text}>
                            24/7 Dedicated support
                        </p>
                    </div>
                </div>
            </article>

            <img src={desktopLaptop} className={styles.laptop} alt="laptop" />

            <p className={styles.floatText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Feugiat nulla suspendisse tortor aene.
            </p>
        </section>

        <section className={styles.blueBg}>
            <Hstack>
                <Vstack>
                    <h2 className={styles.header2}>
                        Explore endless possibilities with FinanceFlow
                    </h2>

                    <div className={styles.text}>
                        Lorem idivsum dolor sit amet, consectetur adipiscing elit. 
                        Feugiat nulla suspendisse tortor aene.
                    </div>

                    <Button linkTo="#" color="#0328EE" bg='#FFFFFF'>
                        download app
                    </Button>
                </Vstack>

                <img src={group} alt="group-phones" />
            </Hstack>
        </section>

        <section>
            <Hstack>
                <h2>
                    What our users say?
                </h2>

                <Button linkTo="#" bg="#0328EE" color='#FFFFFF'>
                    download app
                </Button>
            </Hstack>

            <Slider />
        </section>

        <section>
            <Hstack>
                <h2>
                    Browse our latest news
                </h2>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sit non neque orci amet, amet .
                </p>
            </Hstack>

            <article className={styles.banner}>
                <div>
                    <img src={banner} alt="banner" />

                    <div className={styles.products}>products</div>

                    <Cards bg="#010D50" className='basics'>
                        <h5>
                            The Basics about Cryptocurrency
                        </h5>

                        <p className={styles.text}>
                            Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. 
                            Scelerisque viverra donec diammeo.
                        </p>

                        <hr />

                        <div className={styles.bannerCont}>
                            <img src={alex} alt="alex" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    {currMonth}{" "}{currDay}{", "}{currYear}
                                </div>
                            </div>
                        </div>
                    </Cards>
                </div>

                <div>
                    <img src={banner} alt="banner" />

                    <div className={styles.products}>products</div>

                    <Cards bg="#010D50" className='basics'>
                        <h5>
                            The Basics about Cryptocurrency
                        </h5>

                        <p className={styles.text}>
                            Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. 
                            Scelerisque viverra donec diammeo.
                        </p>

                        <hr />

                        <div className={styles.bannerCont}>
                            <img src={alex} alt="alex" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    {currMonth}{" "}{currDay}{", "}{currYear}
                                </div>
                            </div>
                        </div>
                    </Cards>
                </div>

                <div>
                    <img src={banner} alt="banner" />

                    <div className={styles.products}>products</div>

                    <Cards bg="#010D50" className='basics'>
                        <h5>
                            The Basics about Cryptocurrency
                        </h5>

                        <p className={styles.text}>
                            Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. 
                            Scelerisque viverra donec diammeo.
                        </p>

                        <hr />

                        <div className={styles.bannerCont}>
                            <img src={alex} alt="alex" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    {currMonth}{" "}{currDay}{", "}{currYear}
                                </div>
                            </div>
                        </div>
                    </Cards>
                </div>
            </article>

            <Button linkTo="/blog" bg="rgba(255, 255, 255, 0.10)" color='#FFFFFF'>
                view all articles
            </Button>
        </section>

        <section>
            <Hstack>
                <h2>
                    Download our app
                </h2>

                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sit non neque orci amet, amet .
                </p>
            </Hstack>

            <div className={styles.download}>
                <Cards bg="#010D50"  className="downloadCards">
                    <h2>
                        Download for iOS
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.
                    </p>

                    <Button linkTo="#" bg="#0328EE" color='#FFFFFF'>
                        <span>
                            <img src={appStore} alt="app-store" />
                        </span> 
                        app store
                    </Button>

                    <img src={iPhones} alt="iphones" />
                </Cards>

                <Cards bg="#010D50" className="downloadCards">
                    <h2>
                        Download for Android
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.
                    </p>

                    <Button linkTo="#" bg="#0328EE" color='#FFFFFF'>
                        <span>
                            <img src={playStore} alt="play-store" />
                        </span> 
                        play store
                    </Button>

                    <img src={samsung} alt="samsung" />
                </Cards>
            </div>
        </section>

        <Footer />
    </main>
  )
}

export default Home