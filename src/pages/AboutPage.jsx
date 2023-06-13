import classNames from 'classnames'
import Container from '../layout/container'
import Help from '../components/help'
import video from '../videos/video1.mp4'
import about from '../images/about.png'
import { team } from '../data' 
import styles from './pages.module.scss'

function AboutPage() {
  return (
    <div className={classNames(styles.about, styles.page)}>
      <div className={styles.about__info}>
        <Container className={styles.about__container}>
          <p className={styles.about__title}>About</p>
          <h2 className={styles.about__subtitle}>us</h2>
          <p className={styles.about__text}>Lorem ipsum dolor sit amet consectetur. Convallis integer leo condimentum leo auctor lorem id eu ultrices. Dignissim potenti facilisis morbi eget cras in aliquet eu. Euismod accumsan est vitae felis aliquam. Quis gravida commodo commodo adipiscing nibh. Sit enim elit tristique lacus. Phasellus penatibus ultricies turpis dignissim elit sagittis. Laoreet ut molestie nunc egestas mattis bibendum commodo.</p>
        </Container>
      </div>
      <Container>
        <div className={styles.about__video}>
          <video src={video} poster={about} controls></video>
        </div>
        <div className={styles.team}>
          <h2 className={styles.team__title}>Our team</h2>
          <div className={styles.team__block}>
          {
            team.map((member)=>(
              <div className={styles.team__box}>
                <img className={styles.team__image} src={member.image} alt={member.name} />
                <div className={styles.team__info}>
                  <p className={styles.team__name}>{member.name}</p>
                  <p className={styles.team__position}>{member.position}</p>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </Container>
      <Help />
    </div>
  )
}

export default AboutPage