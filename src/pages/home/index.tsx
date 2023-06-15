import React from 'react';
import styles from "./index.module.css"
import Hstack from '../../layouts/hstack';
import Vstack from '../../layouts/vstack';
import Button from '../../components/button';

const Home: React.FC = ()=> {
  return (
    <>
        <Hstack>
            <Vstack>
                <h1>
                    Buy, trade, and hold 350+ cryptocurrencies
                </h1>

                <p>
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
            </Vstack>
        </Hstack>
    </>
  )
}

export default Home