import React from 'react';
import Cards from '../cards';
import Vstack from '../../layouts/vstack';
import styles from "./index.module.css";

// assets
import sliderImg from "../../assets/sliderImg.svg";

const Slider: React.FC = () => {
  return (
    <main className={styles.slider}>
        <article className={styles.slideTrack}>
            <div className={styles.slide}>
                <Cards bg="#010D50">
                    <Vstack>
                        <div>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In commodo dolor fermentum dignissim et pellentesque egestas mauris, 
                            faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                        </div>

                        <div>
                            <img src={sliderImg} alt="slider-img" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    role, company
                                </div>
                            </div>
                        </div>
                    </Vstack>
                </Cards>
            </div>

            
            <div className={styles.slide}>
                <Cards bg="#010D50" className="slideCard">
                    <Vstack>
                        <div>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In commodo dolor fermentum dignissim et pellentesque egestas mauris, 
                            faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                        </div>

                        <div>
                            <img src={sliderImg} alt="slider-img" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    role, company
                                </div>
                            </div>
                        </div>
                    </Vstack>
                </Cards>
            </div>


            <div className={styles.slide}>
                <Cards bg="#010D50" className="slideCard">
                    <Vstack>
                        <div>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In commodo dolor fermentum dignissim et pellentesque egestas mauris, 
                            faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                        </div>

                        <div>
                            <img src={sliderImg} alt="slider-img" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    role, company
                                </div>
                            </div>
                        </div>
                    </Vstack>
                </Cards>
            </div>


            <div className={styles.slide}>
                <Cards bg="#010D50" className="slideCard">
                    <Vstack>
                        <div>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In commodo dolor fermentum dignissim et pellentesque egestas mauris, 
                            faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                        </div>

                        <div>
                            <img src={sliderImg} alt="slider-img" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    role, company
                                </div>
                            </div>
                        </div>
                    </Vstack>
                </Cards>
            </div>


            <div className={styles.slide}>
                <Cards bg="#010D50" className="slideCard">
                    <Vstack>
                        <div>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In commodo dolor fermentum dignissim et pellentesque egestas mauris, 
                            faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                        </div>

                        <div>
                            <img src={sliderImg} alt="slider-img" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    role, company
                                </div>
                            </div>
                        </div>
                    </Vstack>
                </Cards>
            </div>

            
            <div className={styles.slide}>
                <Cards bg="#010D50" className="slideCard">
                    <Vstack>
                        <div>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In commodo dolor fermentum dignissim et pellentesque egestas mauris, 
                            faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                        </div>

                        <div>
                            <img src={sliderImg} alt="slider-img" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    role, company
                                </div>
                            </div>
                        </div>
                    </Vstack>
                </Cards>
            </div>


            <div className={styles.slide}>
                <Cards bg="#010D50" className="slideCard">
                    <Vstack>
                        <div>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In commodo dolor fermentum dignissim et pellentesque egestas mauris, 
                            faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                        </div>

                        <div>
                            <img src={sliderImg} alt="slider-img" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    role, company
                                </div>
                            </div>
                        </div>
                    </Vstack>
                </Cards>
            </div>


            <div className={styles.slide}>
                <Cards bg="#010D50" className="slideCard">
                    <Vstack>
                        <div>
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In commodo dolor fermentum dignissim et pellentesque egestas mauris, 
                            faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                        </div>

                        <div>
                            <img src={sliderImg} alt="slider-img" />

                            <div>
                                <h6>
                                    john carter
                                </h6>

                                <div>
                                    role, company
                                </div>
                            </div>
                        </div>
                    </Vstack>
                </Cards>
            </div>
        </article>
    </main>
  )
}

export default Slider;