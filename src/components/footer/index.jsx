import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import Container from '../../layout/container'
import logo from '../../images/logo.svg'
import styles from './footer.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.footer__container}>
        <div className={styles.footer__info}>
          <img src={logo} alt="logo" />
          <p className={styles.footer__text}>Lorem ipsum dolor sit amet consectetur. Cursus non rhoncus mauris dolor ultricies cras. Orci sagittis sit eleifend orci non tortor.</p>
        </div>
        <div className={styles.footer__menu}>
          <div className={styles.footer__list}>
            <Link to="/about" className={styles.footer__link}>About us</Link>
            <Link to="/" className={styles.footer__link}>Portfolio</Link>
          </div>
          <div className={styles.footer__list}>
            <Link to="/services" className={styles.footer__link}>Servisec</Link>
            <Link to="/blog" className={styles.footer__link}>Blog</Link>
          </div>
          <div className={styles.footer__list}>
            <Link to="/contact" className={styles.footer__link}>Contact</Link>
            <Link to="tel:+7045550127" className={styles.footer__link}><BsFillTelephoneFill /> (704) 555-0127</Link>
            <Link to="mailto:fantom@example.com" className={styles.footer__link}><MdEmail /> fantom@example.com</Link>
            <div className={styles.footer__media}>
              <Link to={`https://www.facebook.com/${"SanjarFayzullaev99"}`} target="_blank" className={styles.footer__link}><FaFacebookF /></Link>
              <Link to={`https://www.linkedin.com/in/${"fayzullaev99"}`} target="_blank" className={styles.footer__link}><FaLinkedinIn /></Link>
              <Link to={`https://t.me/${"Sanjar_FF"}`} target="_blank" className={styles.footer__link}><FaInstagram /></Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer