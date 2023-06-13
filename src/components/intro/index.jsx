import React from 'react'
import styles from './intro.module.scss'
import Container from '../../layout/container'
function Intro() {
  return (
    <div className={styles.intro}>
        <Container className={styles.intro__container}>
            <h1 className={styles.intro__title}>Lorem ipsum dolor</h1>
            <div className={styles.intro__content}>
                <p className={styles.intro__text}>Lorem ipsum dolor sit amet consectetur. Ante sapien viverra porttitor rhoncus nascetur. </p>
                <h2 className={styles.intro__title}>sit amet consectetur.</h2>
            </div>
        </Container>
    </div>
  )
}

export default Intro