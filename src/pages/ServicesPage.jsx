import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import Container from '../layout/container'
import { servicesData } from '../data.js'
import styles from './pages.module.scss'
import Help from '../components/help'
function ServicesPage() {
  const navigate = useNavigate()
  return (
    <div className={classNames(styles.services, styles.page)}>
      <Container>
        <p className="page__text">Our</p>
        <h2 className="page__title">services</h2>
      </Container>
      <div className={styles.services__block}>
        <Container className={styles.services__container}>
          {servicesData.map((data) => (
            <div key={data.id} className={styles.services__card}>
              <img src={data.icon} alt={data.title} className={styles.services__image} />
              <p className={styles.services__title}>{data.title}</p>
              <p className={styles.services__text}>{data.info.split(" ").slice(0, 20).join(" ")}</p>
              <button className={styles.services__button} onClick={() => navigate(`/services/${data.id}`)}>Read more</button>
            </div>
          ))}
        </Container>
      </div>
      <Help />
    </div>
  )
}

export default ServicesPage