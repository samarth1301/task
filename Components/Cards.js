import React from 'react'
import styles from '../styles/Home.module.css'

const Cards = ({ featured,
    imageURL,
    category,
    timeReq,
    title,
    desc }) => {
    return (
        <div className={styles.cards}>
            <div>
                <img src={imageURL} className={styles.cardImg} alt="description image" />
            </div>
            <div className={styles.infoContainer} >
                <strong><p>{category.toUpperCase()}</p></strong>
                <p>{timeReq}</p>
            </div>
            <div className={styles.title}>
                {title.slice(0, 65) + " ....."}
            </div>
            <div className={styles.description} >
                {desc.slice(0, 175) + " ....."}
            </div>
            <button className={styles.btton} >
                Read full Article
            </button>
            {
                featured&& 
                <div className={styles.featured} >
                    FEATURED
                </div>
            }
        </div>
    )
}

export default Cards
