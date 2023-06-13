import React from 'react'
import styles from './blogDetails.module.scss'
import Container from '../../layout/container'
import {blogsData} from '../../data'
import { useParams } from 'react-router-dom';
import blogDetails1 from '../../images/blogDetails1.png';
import blogDetails2 from '../../images/blogDetails2.png';
import blogBox1 from '../../images/blogBox1.png';
import blogBox2 from '../../images/blogBox2.png';
import video from '../../videos/video1.mp4';

function BlogDetails() {
    const { blogId } = useParams()
    const data = blogsData[blogId - 1]
    return (
        <div className={styles.details}>
            <Container className={styles.details__container}>
                <h2 className="page__title">blog</h2>
                <div className={styles.details__block}>
                    <video src={video} poster={blogDetails1} className={styles.details__video} controls></video>
                    <h3 className={styles.details__title}>{data.title}</h3>
                    <p className={styles.details__text}>{data.intro}</p>
                    <video src={video} poster={blogDetails2} className={styles.details__video} controls></video>
                    <p className={styles.details__text}>{data.main}</p>
                    <div className={styles.details__box}>
                        <img src={blogBox1} alt={data.title} className={styles.details__image} />
                        <img src={blogBox2} alt={data.title} className={styles.details__image} />
                    </div>
                    <p className={styles.details__text}>{data.conclusion}</p>
                </div>
            </Container>
        </div>
    )
}

export default BlogDetails