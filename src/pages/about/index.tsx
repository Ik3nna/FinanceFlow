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

            <Hstack>
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
            </Hstack>
        </article>

        <article>
            
        </article>
    </section>
  );
}

export default About