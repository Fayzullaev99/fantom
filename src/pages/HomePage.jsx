import React from 'react'
import Intro from '../components/intro'
import Help from '../components/help'
import Reason from '../components/reason'
import Services from '../components/services'
import Portfolio from '../components/portfolio'
import Review from '../components/review'
import Blog from '../components/blog'
import dots from '../images/dots.png'
import styles from './pages.module.scss'

function HomePage() {
  return (
    <>
      <Intro />
      <Help />
      <img src={dots} alt="dots pattern" className={styles.home__dots} />
      <Reason />
      <Services />
      <Portfolio />
      <Review />
      <Blog />
    </>
  )
}

export default HomePage