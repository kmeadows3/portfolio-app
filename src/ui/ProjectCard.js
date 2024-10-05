import Portfolio from '@/app/portfolio/page'
import styles from '../app/page.module.css'
import Link from 'next/link'

export default function ProjectCard({project}){
    return (
        <Link className={`${styles.card} ${styles.shadow}`}
            href={`portfolio/${project.id}/detail`}>
            <h1 className={styles.title}>{project.name}</h1>
            <div>{project.shortDescription}</div>
            <div className={styles.stack}>{project.techStack.map( (language, index) => {
                return(<span key={project.name + "-" + language}>
                    {index > 0 ? ', ' + language : language}
                    </span>)
            })}</div>


        </Link>
    )

}