import React from 'react'
import styles from '../styles/Home.module.css'

const Feedback = () => {
    return (
        <div className={styles.feedbackContainer} >
            <div className={styles.feedbackAbout} >
                <h2 className={styles.title} >Drop us a line!</h2>
                <p className={styles.description}>an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum pass</p>
            </div>
            <button className={styles.btton} >
                Contact Us
            </button>
        </div>
    )
}

export default Feedback
