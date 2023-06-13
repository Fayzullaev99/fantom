import React from 'react'
import styles from './reason.module.scss'
import whyus from '../../images/whyus.png'
import Container from '../../layout/container'
import TruncatedText from '../truncatedText'

function Reason() {
    return (
        <div className={styles.reason}>
            <Container className={styles.reason__container}>
                <img src={whyus} alt="why work" className={styles.reason__image} />
                <div className={styles.reason__block}>
                    <p className="component__text reason">Why work</p>
                    <h2 className="component__title reason">with us</h2>
                    <div className={styles.reason__card}>
                        <li className={styles.reason__title}>Lorem ipsum</li>
                        <TruncatedText
                            max={3}
                            className={styles.reason__text}
                            text={"Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor."}
                        />
                    </div>
                    <div className={styles.reason__card}>
                        <li className={styles.reason__title}>Lorem ipsum</li>
                        <TruncatedText
                            max={3}
                            className={styles.reason__text}
                            text={"Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor."}
                        />
                    </div>
                    <div className={styles.reason__card}>
                        <li className={styles.reason__title}>Lorem ipsum</li>
                        <TruncatedText
                            max={3}
                            className={styles.reason__text}
                            text={"Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor."}
                        />
                    </div>
                    <div className={styles.reason__card}>
                        <li className={styles.reason__title}>Lorem ipsum</li>
                        <TruncatedText
                            max={3}
                            className={styles.reason__text}
                            text={"Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor."}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Reason