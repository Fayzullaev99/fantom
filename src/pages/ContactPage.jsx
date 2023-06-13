import Container from '../layout/container'
import styles from './pages.module.scss'
import classNames from 'classnames'
import { TiLocation } from 'react-icons/ti'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Help from '../components/help'

function ContactPage() {
  return (
    <div className={classNames(styles.contact, styles.page)}>
      <Container>
        <h2 className="page__title">contact</h2>
        <div className={styles.contact__block}>
          <div className={styles.contact__card}>
            <div className={styles.contact__map}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5900545.115483296!2d-110.29234801570405!3d43.77025269843648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877d432d85e938a5%3A0x7f0d6293186a4b7!2sJanubiy%20Dakota%2C%20Amerika%20Qo%E2%80%98shma%20Shtatlari!5e0!3m2!1suz!2s!4v1685583582562!5m2!1suz!2s" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title='map 1'
              ></iframe>
            </div>
            <div className={styles.contact__box}>
              <div className={styles.contact__location}>
                <TiLocation />
                <p className={styles.contact__address}>2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>
              <div className={styles.contact__call}>
                <BsFillTelephoneFill />
                <Link to='tel:+7045550127' className={styles.contact__phone}>(704) 555-0127</Link>
              </div>
            </div>
          </div>
          <div className={styles.contact__card}>
            <div className={styles.contact__map}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5900545.115483296!2d-110.29234801570405!3d43.77025269843648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877d432d85e938a5%3A0x7f0d6293186a4b7!2sJanubiy%20Dakota%2C%20Amerika%20Qo%E2%80%98shma%20Shtatlari!5e0!3m2!1suz!2s!4v1685583582562!5m2!1suz!2s" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title='map 2'
              ></iframe>
            </div>
            <div className={styles.contact__box}>
              <div className={styles.contact__location}>
                <TiLocation />
                <p className={styles.contact__address}>2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>
              <div className={styles.contact__call}>
                <BsFillTelephoneFill />
                <Link to='tel:+7045550127' className={styles.contact__phone}>(704) 555-0127</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Help />
    </div>
  )
}

export default ContactPage