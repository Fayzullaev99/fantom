import React from 'react'
import Container from '../../layout/container'
import portfolio1 from '../../images/portfolio1.png'
import portfolio2 from '../../images/portfolio2.png'
import portfolio3 from '../../images/portfolio3.png'
import portfolio4 from '../../images/portfolio4.png'
import portfolio5 from '../../images/portfolio5.png'
import styles from './portfolio.module.scss'
function Portfolio() {
  return (
    <div className={styles.portfolio}>
        <Container>
        <h2 className="component__title">portfolio</h2>
        <div className={styles.portfolio__grid}>
            <img src={portfolio1} alt="portfolio" className={styles.portfolio__image} />
            <img src={portfolio2} alt="portfolio" className={styles.portfolio__image} />
            <img src={portfolio3} alt="portfolio" className={styles.portfolio__image} />
            <img src={portfolio4} alt="portfolio" className={styles.portfolio__image} />
            <img src={portfolio5} alt="portfolio" className={styles.portfolio__image} />
        </div>
            
        </Container>
    </div>
  )
}

export default Portfolio