import React from 'react'
import styles from '../styles/Home.module.css'

const Subscribe = () => {
    return (
        <div className={styles.titleContainer}>
            <h2 className={styles.blogTitle} >
                Subscribe Blogs for latest updates
            </h2>
            
                <p className={styles.paraText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate t </p>

                <input type="email" placeholder='Enter email address' className={styles.emailInput} />
                <button className={styles.btton}>
                    Subscribe Now!
                </button>
                <p className={styles.noteparaText}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate t </p>
        </div>
    )
}

export default Subscribe
