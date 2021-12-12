import React, { useState } from 'react'
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const SwitchTab = () => {
    const router= useRouter();
    const path= router.pathname.slice(1);
    const [allTypes] = useState([
        {
            id: ``,
            name: "All",
            isActive: false
        },
        {
            id: `design`,
            name: "Design",
            isActive: false

        },
        {
            id: `branding`,
            name: "Branding",
            isActive: false

        },
        {
            id: `illustrations`,
            name: "Illustrations",
            isActive: false

        },
        {
            id: `icons`,
            name: "Icons",
            isActive: false

        },
        {
            id: `theme`,
            name: "Themes",
            isActive: false

        }
    ]);
    return (
        <div className={styles.switchTab} >
        <div className={styles.tabContainer}>
            {
                allTypes.map((item)=>{
                    console.log(item);
                    return(
                        <Link href={`/${item.id}`}>
                            <div className={path===item.id?styles.linkActive:styles.link} >
                                <h5>{item.name}</h5>  
                            </div>
                         </Link>
                    )
                })
            }
        </div>
            <hr/>
        </div>
    )
}

export default SwitchTab
