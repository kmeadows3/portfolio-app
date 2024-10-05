import getProjects from '@/data/projects.js';
import projects from '@/data/projects.js'

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
        <div>
            <h1 >{project.name}</h1>
            <div>{project.description}</div>
            <div>{project.techStack.map( (language, index) => {
                return(<span key={project.name + "-" + language}>
                    {index > 0 ? ', ' + language : language}
                    </span>)
            })}</div>
            <div>{project.repository}</div>
            <div>{project.link}</div>
            <div>{project.note}</div>
        </div>
    )

}