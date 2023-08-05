import React from 'react';
import styles from "./index.module.css";
import Hstack from '../../layouts/hstack';
import Vstack from '../../layouts/vstack';
import Cards from '../../components/cards';

// assets 
import openSource from "../../assets/open-source.svg";
import transparent from "../../assets/transparent.svg";
import worldwide from "../../assets/worldwide.svg";
import community from "../../assets/community.svg";
import planet from "../../assets/planet.svg";
import point from "../../assets/point.svg";
import john from "../../assets/john-carter.svg";
import sophie from "../../assets/sophie-moore.svg";
import alex from "../../assets/alex-turner.svg";
import company from "../../assets/company.svg";
import mobCompany from "../../assets/mobile-logos.svg";

const About: React.FC = () => {
  return (
    <section className={styles.container}>
        <article className={styles.main}>
            <h1>about finance flow</h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Feugiat nulla suspendisse tortor aenean dis placerat. 
                Scelerisque imperdiet vitae dolor non aliquam. Malesuada.
            </p>
        </article>

        <article>
            <Hstack>
                <h2>
                    What drives Finance Flow?
                </h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Feugiat nulla suspendisse tortor aene.
                </p>
            </Hstack>

            <div className={styles.cardsContainer}>
                <Vstack>
                    <Cards bg="#010D50" className="aboutCard">
                        <div className={styles.innerCards}>
                            <img src={openSource} alt="open-source" />

                            <div>
                                <h4>
                                    Open Source
                                </h4>  

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
                                </p>
                            </div> 
                        </div>
                    </Cards>

                    <Cards bg="#010D50" className="aboutCard">
                        <div className={styles.innerCards}>
                            <img src={transparent} alt="open-source" />

                            <div>
                                <h4>
                                    Transparent
                                </h4>  

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
                                </p>
                            </div> 
                        </div>
                    </Cards>
                </Vstack>

                <Vstack>
                    <Cards bg="#010D50" className="aboutCard">
                        <div className={styles.innerCards}>
                            <img src={worldwide} alt="open-source" />

                            <div>
                                <h4>
                                    Worldwide
                                </h4>  

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
                                </p>
                            </div> 
                        </div>
                    </Cards>

                    <Cards bg="#010D50" className="aboutCard">
                        <div className={styles.innerCards}>
                            <img src={community} alt="open-source" />

                            <div>
                                <h4>
                                    Community Driven
                                </h4>  

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
                                </p>
                            </div> 
                        </div>
                    </Cards>
                </Vstack>
            </div>
        </article>

        <article className={styles.planet}>
            <Hstack>
                <Vstack>
                    <div>
                        <h2>Our mission</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Parturient lorem purus justo, ultricies. Sollicitudin odio 
                            elementum urna placerat lacus, vulputate. Non malesuada viverra 
                            et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. 
                            Praesent arcu tempus ullamcorper quisque in. Magna fermentum, 
                            lacus, fermentum arcu. Vulputate pellentesque proin facilisis 
                            dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus.
                            Elit in nisl, in quis nulla tellus suscipit id. Semper velit 
                            odio cras pretium tristique habitant. Elit eu penatibus congue orci 
                            turpis. Enim diam id.
                        </p>
                    </div>

                    <div>
                        <h2>Our story</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Parturient lorem purus justo, ultricies. Sollicitudin odio 
                            elementum urna placerat lacus, vulputate. Non malesuada viverra 
                            et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. 
                            Praesent arcu tempus ullamcorper quisque in. Magna fermentum, 
                            lacus, fermentum arcu. Vulputate pellentesque proin facilisis 
                            dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus.
                            Elit in nisl, in quis nulla tellus suscipit id. Semper velit 
                            odio cras pretium tristique habitant. Elit eu penatibus congue orci 
                            turpis. Enim diam id.
                        </p>
                    </div>
                </Vstack>

                <img src={planet} alt="planet" />
            </Hstack>
        </article>

        <article className={styles.timeline}>
            <div className={styles.timelineC}>
                <div>
                    <h2>Timeline</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros elementum tristique. Duis 
                        cursus, mi quis viverra ornare, eros dolor interdum nulla, 
                        ut commodo diam libero vitae erat. 
                    </p>
                </div>

                <Vstack>
                    <div className={styles.timelineCont}>
                        <img src={point} alt="point" />

                        <Vstack>
                            <h4>2014</h4>

                            <p>ANNOUNCEMENT</p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed mattis vivamus at mattis bibendum congue cras id interdum. 
                                Risus leo et.
                            </p>
                        </Vstack>
                    </div><hr />

                    <div className={styles.timelineCont}>
                        <img src={point} alt="point" />

                        <Vstack>
                            <h4>2016</h4>

                            <p>ANNOUNCEMENT</p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed mattis vivamus at mattis bibendum congue cras id interdum. 
                                Risus leo et.
                            </p>
                        </Vstack>
                    </div><hr />

                    <div className={styles.timelineCont}>
                        <img src={point} alt="point" />

                        <Vstack>
                            <h4>2018</h4>

                            <p>ANNOUNCEMENT</p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed mattis vivamus at mattis bibendum congue cras id interdum. 
                                Risus leo et.
                            </p>
                        </Vstack>
                    </div><hr />

                    <div className={styles.timelineCont}>
                        <img src={point} alt="point" />

                        <Vstack>
                            <h4>2022</h4>

                            <p>ANNOUNCEMENT</p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed mattis vivamus at mattis bibendum congue cras id interdum. 
                                Risus leo et.
                            </p>
                        </Vstack>
                    </div><hr />
                </Vstack>
            </div>
        </article>

        <article>
            <Hstack>
                <h2>Our Team</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Parturient lorem purus justo, ultricies.
                </p>
            </Hstack>

            <div className={styles.cardsContainer}>
                <Cards bg="#010D50" className="teamCard">
                    <img src={john} alt="john" />

                    <h6>JOHN CARTER</h6>

                    <h6>CEO & CO-FOUNDER</h6>
                </Cards>

                <Cards bg="#010D50" className="teamCard">
                    <img src={sophie} alt="sophie" />

                    <h6>SOPHIE MOORE</h6>

                    <h6>COMMUNITY LEAD</h6>
                </Cards>

                <Cards bg="#010D50" className="teamCard">
                    <img src={alex} alt="alex" />

                    <h6>ALEX TURNER</h6>

                    <h6>OPERATIONS</h6>
                </Cards>
            </div>
        </article>

        <article className={styles.investors}>
            <h2>
                Investors
            </h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Parturient lorem purus justo, ultricies.
            </p>

            <img src={company} alt="company" />

            <img src={mobCompany} alt="company" />
        </article>
    </section>
  );
}

export default About