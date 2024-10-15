'use client'

import styles from '@/app/page.module.css'

export default function ResumeFooter() {
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior: "auto"
        });
    }

    return (
        <div className={styles.footer}> <span onClick={scrollToTop} className={styles.shadow}>Scroll to Top</span></div>
    )
}