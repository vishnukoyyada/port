export interface ISectionCardData {
    id: number;
    title: string;
    src: string;
    exp: string;
    snippetCount: number;
    progress: number;
    href?: string;
}
export const projectCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'JARVIS',
        src: '/projects/jarvis.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 100,
        href: 'https://github.com/vishnukoyyada/jarvis-voiceassistant',
    },
    {
        id: 2,
        title: 'BRAIN TUMOR CLASSIFICATION',
        src: '/projects/braintumor.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 100,
        href: 'https://github.com/vishnukoyyada/braintumorclassification-using-cnn',
    },
    {
        id: 3,
        title: 'PORTFOLIO',
        src: '/projects/portfolio.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 100,
        href: 'https://github.com/vishnukoyyada/port',
    },
    {
        id: 4,
        title: 'ALLABOUTCS',
        src: '/projects/cs.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 100,
        href: 'https://github.com/vishnukoyyada/AllAboutCS',
    },
];

export const frontendCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'HTML, CSS',
        src: '/tech/frontend/htmlcss.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },

    {
        id: 2,
        title: 'Javascript, Typescript',
        src: '/tech/frontend/jsts.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 85,
    },
    {
        id: 3,
        title: 'Reactjs',
        src: '/tech/frontend/reactjs.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
];

export const web3Cards: ISectionCardData[] = [
    {
        id: 2,
        title: 'Hardhat',
        src: '/tech/web3/hardhat.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },

];

export const backendCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'NodeJs',
        src: '/tech/backend/nodejs.webp',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'PHP',
        src: '/tech/backend/php.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];

export const databaseCard: ISectionCardData[] = [
    {
        id: 1,
        title: 'MySQL',
        src: '/tech/database/mysql.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: 'MongoDB',
        src: '/tech/database/mongo.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: 'Elastic Search',
        src: '/tech/database/elasticSearch.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];

export const devopsCards: ISectionCardData[] = [
    {
        id: 1,
        title: 'Docker',
        src: '/tech/devops/docker.webp',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 2,
        title: 'Kubernetes',
        src: '/tech/devops/k8s.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 3,
        title: 'GIT',
        src: '/tech/devops/git.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 80,
    },
    {
        id: 4,
        title: 'Jenkins',
        src: '/tech/devops/jenkins.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];

export const otherCards: ISectionCardData[] = [
    {
        id: 1,
        title: 'Rest API',
        src: '/tech/others/rest.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'SOAP API',
        src: '/tech/others/soap.jpg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 3,
        title: 'GraphQl',
        src: '/tech/others/graphql.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];

export const Programming: ISectionCardData[] = [
    {
        id: 1,
        title: 'JAVA',
        src: '/tech/languages/java.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {
        id: 2,
        title: 'PYTHON',
        src: '/tech/languages/python.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 3,
        title: 'C++',
        src: '/tech/languages/cpp.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];
export const ComputerScience: ISectionCardData[] = [
    {
        id: 1,
        title: 'DATA SCIENCE',
        src: '/tech/CS/ds.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 90,
    },
    {

        id: 3,
        title: 'AI/ML',
        src: '/tech/CS/aiml.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 4,
        title: 'COMPUTER NETWORKS',
        src: '/tech/CS/cn.jpeg',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
    {
        id: 3,
        title: 'OS',
        src: '/tech/CS/os.png',
        exp: '1 day ago',
        snippetCount: 1128,
        progress: 70,
    },
];