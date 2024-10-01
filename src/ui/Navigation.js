import styles from "../app/page.module.css";
import Link from "next/link";

const links = [
    {name:'About', href:'/'},
    {name:'Resume', href:'/resume'},
    {name:'Portfolio', href:'/portfolio'},
]




export default function Navigation() {
    return (
    <nav className={styles.navigation}>
        {links.map((link, index) => {
            return (
            <div key={'nav-'+link.href}>
            {index > 0 && <span>&nbsp;|&nbsp;</span>}
            <Link className={styles.navLink} href={link.href}>{link.name}</Link>
            </div>
        )
        })}

     </nav>
    );
  }