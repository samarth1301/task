import React from 'react'
import styles from '../styles/Home.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <div className={styles.logoContainer}>
                <img src='' />
                <strong>Company</strong>
                
            </div>
            <div className={styles.navComponents}>
                <p>About Us</p>
                <p>Pricing</p>
                <p>Recources</p>
                <p>Products</p>
                <button className={styles.btton}>
                    Contact Us
                </button>
            </div>
        </nav>
    )
}

export default Navbar