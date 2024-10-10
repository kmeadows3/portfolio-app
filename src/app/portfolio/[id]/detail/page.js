import getProjects from '@/data/projects.js';
import styles from '@/app/page.module.css'
import Link from 'next/link';
import Image from 'next/image';
import ImageSlider from '@/ui/ImageSlider';

export function generateStaticParams(){

    const projects = getProjects();
    return projects.map( (project) => ({
        id: project.id.toString()
    }));
}

export default function Detail({params}){
    const id = params.id;
    const project = getProjects().filter( p => p.id == id)[0];

    return (
        <div className={styles.portfolioDetail}>
            <h1 className={styles.title}>{project.name}</h1>
            {project.images && <ImageSlider images={project.images}/>}
            <div className={styles.description}>{project.description}</div>
            <div><strong>Languages Used: </strong>{project.techStack.map( (language, index) => {
                return(<span key={project.name + "-" + language}>
                    {index > 0 ? ', ' + language : language}
                    </span>)
            })}</div>
            <div><strong>Repository: </strong><a href={project.repository}>GitHub</a></div>
            {project.link && <div><strong>Link: </strong><a href={project.link}>{project.name}</a></div>}
            {project.note && <div><strong>Notes: </strong>{project.note}</div>}
            <div className={styles.footer}><Link href={`/portfolio`}>Return to Portfolio</Link></div>
        </div>
    )

}