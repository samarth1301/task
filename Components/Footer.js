import React from 'react'
import styles from '../styles/Home.module.css'
import {AiFillYoutube,AiFillFacebook,AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"
import Feedback from './Feedback'
const Footer = () => {
    return (
        <>
            <Feedback/>
    <footer className={styles.footer}>
       <div className={styles.footerContent}>
            <h4 className={styles.footerHeading} >Contact Us</h4>
            <h5 className={styles.footerdescription} >hello@company.com</h5>
            <h5 className={styles.footerdescription} >123456789</h5>
       </div>
       <div className={styles.footerContent}>
            <h4 className={styles.footerHeading} >Links</h4>
            <h5 className={styles.footerdescription} >About</h5>
            <h5 className={styles.footerdescription} >Pricing</h5>
            <h5 className={styles.footerdescription} >Resources</h5>
       </div>
       <div className={styles.footerContent}>
            <h4 className={styles.footerHeading} >Products</h4>
            <h5 className={styles.footerdescription} >Illustrations</h5>
            <h5 className={styles.footerdescription} >Icons</h5>
            <h5 className={styles.footerdescription} >Themes</h5>
            <h5 className={styles.footerdescription} >Templates</h5>
       </div>
       <div className={styles.footerContent}>
            <h4 className={styles.footerHeading} >Follow Us</h4>
            <div className={styles.flex} >
                <AiFillYoutube/>
                <AiFillFacebook/>
                <AiFillTwitterCircle/>
                <AiFillInstagram/>
            </div>
            <img src="https://cdn2.vectorstock.com/i/1000x1000/51/46/company-icons-building-set-vector-21875146.jpg" alt="" className={styles.img}/>
       </div>
    </footer>
       <div className={styles.bottomContainer} >
           <h5 className={styles.footerdescription} >Privacy Policy</h5>
           <h5 className={styles.footerdescription} >© company 2019 | All Rights Reserved</h5>
       </div>
    </>
    )
}

export default Footer
