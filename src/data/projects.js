export default function getProjects(){
    return ([
    {
        id: 1,
        name: 'This is Not a Test Team Builder',
        shortDescription: 'Team builder for the post-apocalyptic tabletop wargame "This is Not a Test"',
        description: 'Team builder for the post-apocalyptic tabletop wargame "This is Not a Test." Teams are stored on a Microsoft Azure Database for PostgreSQL. The server is a REST API written in Java and running on Azure App Service. In addition to general CRUD operations, it validates all data received from the client to ensure the changes are legal within the game’s rules. Finally the client is a Static Web App written in Vue.js. Testing was performed using JUnit and Postman.',
        techStack: ['Java', 'PostgreSQL', 'Vue.js', 'JavaScript', 'HTML/CSS'],
        repository: 'https://github.com/kmeadows3/TnT-Team-Builder',
        link: 'https://ashy-pebble-02d86880f.5.azurestaticapps.net',
        note: 'Server is running on the free tier of Microsoft Azure and takes time to boot when first accessed.',
        images: [
            {
                url: '/tntBuilder/1.png',
                text: 'placeholder',
                width: 400,
                height: 200
            },
        ]
    },
    {
        id:2,
        name: 'Chatwick',
        shortDescription: 'Rules-based chatbot that provides job search and interview advice for Tech Elevator students', 
        description: 'Capstone project for Tech Elevator. Worked in a small team using Agile methodologies to build a rules-based chatbot designed to help prepare Tech Elevator students search for the job search and interview process. A Vue.js front-end sends user utterances to a RESTful Java application using Spring Boot to run a Tomcat server. Chatbot responses are retrieved from a PostgreSQL database, then filtered and ranked to determine the most fitting response. It is capable of providing general interview advice, providing practice HR and technical questions, generating and scoring a quiz on technical topics, and even searching for jobs.',
        techStack: ['Java', 'PostgreSQL', 'Vue.js', 'JavaScript', 'HTML/CSS'],
        repository: 'https://github.com/kmeadows3/Chatbot-Tech-Elevator-Capstone',
        images: [
            {
                url: '/chatwick/MainScreen.png',
                text: 'Desktop Layout',
                width: 400,
                height: 200
            },
            {
                url: '/chatwick/JobSearch.png',
                text: 'Job Search',
                width: 400,
                height: 200
            },
            {
                url: '/chatwick/ExampleResponse.png',
                text: 'Basic Responses',
                width: 400,
                height: 200
            },
            {
                url: '/chatwick/ExampleResponseWithPictures.png',
                text: 'Response with additional media',
                width: 400,
                height: 200
            },
            {
                url: '/chatwick/CompanySearch.png',
                text: 'Company Search',
                width: 400,
                height: 200
            },
            {
                url: '/chatwick/Quiz.png',
                text: 'Technical Quiz',
                width: 400,
                height: 200
            },
            {
                url: '/chatwick/QuizResults.png',
                text: 'Technical Quiz Results',
                width: 400,
                height: 200
            },
            {
                url: '/chatwick/SelfieMode.png',
                text: 'Picture Mode to Replace User Avatar',
                width: 400,
                height: 200
            }
        ]
    },
    {
        id:3,
        name: 'Portfolio Website',
        shortDescription: 'Portfolio Website for Katherine Meadows created with React and Next.js',
        description: 'You are currently browsing this particular project. This site was created as a practice project while learning React and Next.js. It uses GitHub actions to automatically package and deploy itself onto GitHub Pages when pushed to the repository.',
        techStack: ['React', 'Next.js'],
        repository: 'https://github.com/kmeadows3/portfolio-app',
    },
    {
        id:4,
        name: 'Practice Projects',
        shortDescription: 'A collection of smaller projects to either practice my skills, learn new frameworks and languages, or test new styles of development.',
        description: 'This repository consists of a variety of smaller projects I took on to either practice my skills or learn a new framework or development process. Notable examples include the Kenny Rogers Kata, where I opted to solve the kata with both TypeScript and Test-Driven Development and the multiple small webpages created while learning React.',
        techStack: ['TypeScript', 'React', 'Next.js'],
        repository: 'https://github.com/kmeadows3/Practice-Projects',
    }
])};
