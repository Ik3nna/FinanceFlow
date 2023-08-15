import { useState } from 'react';
import styles from "./index.module.css";

// assets
import Plus from "../../assets/plus-icon.svg";
import Minus from "../../assets/minus-icon.svg";

interface FAQProps {
    questNum: number,
    desc: string,
}

const FAQ = ({ questNum, desc }: FAQProps) => {
  const [show, setShow] = useState(false);

  const handleShow = ()=> {
    setShow(!show);
  }

  return (
    <section className={styles.container}> 
        <div>
            <h4>Question {questNum}</h4>

            <img src={show ? Minus : Plus} alt="sign" onClick={handleShow} />
        </div>

        {show &&
            <p>
                {desc}
            </p>
        }<hr />
    </section>
  )
}

export default FAQ;