import React from 'react';
import styles from "./index.module.css";
import Button from '../../components/button';

const PageNotFound: React.FC = () => {
  return (
    <section className={styles.container}>
        <h1>404</h1>

        <h4>Page Not Found</h4>

        <p>
            The page you're looking for can't be found.
            Double-check the URL and try again. Or click the button below.
        </p>

        <div>
            <Button linkTo="/pricing" bg="#0328EE" color="#FFF">
                view pricing
            </Button>

            <Button linkTo="/home" bg="rgba(255, 255, 255, 0.10)" color="#FFF">
                go home
            </Button>
        </div>
    </section>
  )
}

export default PageNotFound;