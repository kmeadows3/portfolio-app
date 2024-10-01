export const metadata = {
    title: 'Portfolio',
}

const projects = [
    {
        name: 'This is Not a Test Team Builder',
        description: 'Team builder for the post-apocalytic tabletop wargame "This is Not a Test." Deployed on the free tier of microsoft Azure, so may take time to boot when first accessed.',
        techStack: ['Java', 'PostgreSQL', 'Vue.js', 'Javascript'],
        repository: 'https://github.com/kmeadows3/TnT-Team-Builder',
        link: 'https://ashy-pebble-02d86880f.5.azurestaticapps.net'
    },
    {
        name: 'Chatwick - Tech Elevator Chatbot',
        description: 'Capstone project for Tech Elevator. Worked as part of Agile team to develop a rules-based chatbot that could provide interview advice and aid students in their job search. In addition to its primary functions, it is capable of giving the user a quiz on technical topics, looking up company data, and performing a job search.',
        techStack: ['Java', 'PostgreSQL', 'Vue.js', 'Javascript'],
        repository: 'https://github.com/kmeadows3/Chatbot-Tech-Elevator-Capstone',
    },
    {
        name: 'Portfolio Website',
        description: 'Portfolio-ception! This website is built completely in React and Next.js as a practice project.',
        techStack: ['React', 'Next.js'],
        repository: 'https://github.com/kmeadows3/Practice-Projects/tree/master',
    },
    {
        name: 'Practice Projects',
        description: 'A collection of smaller projects to either practice my skills, learn new frameworks and languages, or test new styles of development.',
        techStack: ['Typescript', 'React', 'Next.js'],
        repository: 'https://github.com/kmeadows3/Practice-Projects/tree/master',
    }
]



export default function Portfolio(){

    return (
        <>
        {projects.map((project) => {
            return (
                <div key={project.name}>{project.name} - {project.description}</div>
            )
        })}
        </>
    )
}