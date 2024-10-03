import ProjectCard from "@/ui/ProjectCard";
import styles from '@/app/page.module.css';
import getProjects from "@/data/projects";

export const metadata = {
    title: 'Portfolio',
}

const projects = getProjects();


export default function Portfolio(){

    return (
        <div className={styles.cardContainer}>
        {projects.map((project) => {
            return (
                <ProjectCard project={project} key={'card-'+project.name}/>
            )
        })}
        </div>
    )
}