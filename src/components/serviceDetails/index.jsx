import React from 'react'
import {useParams } from 'react-router-dom'
import { servicesData } from '../../data.js'
import serviceDetails from '../../images/servicevideo.png'
import video from '../../videos/video1.mp4'
import styles from './serviceDetails.module.scss'
import Container from '../../layout/container'
function ServiceDetails() {
    const { serviceId } = useParams()
    const data = servicesData[serviceId - 1]
    return (
        <div className={styles.details}>
            <Container className={styles.details__container}>
                <div className={styles.details__info}>
                    <p className={styles.details__title}>{data.title}</p>
                    <p className={styles.details__text}>{data.info}</p>
                </div>
                <div className={styles.details__video}>
                    <video src={video} poster={serviceDetails} controls></video>
                </div>
            </Container>
        </div>
    )
}

export default ServiceDetails