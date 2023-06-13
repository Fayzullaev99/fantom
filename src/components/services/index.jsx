import { useNavigate } from 'react-router-dom'
import Container from '../../layout/container'
import {servicesData} from '../../data'
import styles from './services.module.scss'

function Services() {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.services}>
                <Container>
                    <p className="component__text">Our</p>
                    <h2 className="component__title">services</h2>
                </Container>
                <div className={styles.services__block}>
                    <Container className={styles.services__container}>
                        {servicesData.map((data)=>(
                            <div key={data.id} className={styles.card}>
                            <img src={data.icon} alt={data.title} className={styles.card__image} />
                            <p className={styles.card__text}>{data.title}</p>
                            <button className={styles.card__readMore} onClick={() => navigate(`/services`)}>Read more</button>
                        </div>
                        ))}
                    </Container>
                </div>
            </div>
        </>
    )
}

export default Services



