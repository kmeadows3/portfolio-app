import Portfolio from '@/app/portfolio/page'
import styles from '../app/page.module.css'

export default function ProjectCard({project}){
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>{project.name}</h1>
            <div>{project.shortDescription}</div>
            <div className={styles.stack}>{project.techStack.map( (language, index) => {
                return(<span key={project.name + "-" + language}>
                    {index > 0 ? ', ' + language : language}
                    </span>)
            })}</div>
        </div>
    )

}