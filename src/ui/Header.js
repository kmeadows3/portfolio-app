import styles from "../app/page.module.css";
import Navigation from "./Navigation";



export default function SideNav() {
    return (
    <div className={styles.headerContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Katherine Meadows Portfolio</h1>
        <Navigation/>
        </div>
        
     </div>
    )
  }
  