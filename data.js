import moment from 'moment';
export const myData = {
    name: 'JASON CRUZ',
    nickname: 'Jay',
    birthDate: 'Jan 11, 1990',
    age: moment().diff('1990-01-11', 'years'),
    position: 'Software Engineer',
    emailAddress: 'cruzjasoneric@gmail.com',
    mobileNumber: '+639175564101',
    address: 'Marikina City',
    objective: 'to contribute to the company with full competence while harnessing and developing my skills',
    civilStatus: 'Single',
    religion: 'Roman Catholic',
    mbti: 'INFJ',
    interests: 'Music, Technology, Visual Arts, Anime, Video Games',
    experiences: [
        {
            company: 'Metrobank',
            info: [
                {
                    position: 'Programmer Analyst (Nov 2019 - present)',
                    description: 'Became part of the development team for Metrobank\'s Online Account Onboarding and Online Updating of Personal Info',
                },
            ],
        },
        {
            company: 'Vertere Global Solutions, Inc.',
            info: [
                {
                    position: 'Consultant (July 2018 - Nov 2019)',
                    description: 'Deployed at Metrobank as a project-based employee; became involved with the development of a Bulk Account Opening and Payroll System (web application) for clients whose payroll are under Metrobank',
                },
            ],
        },
        {
            company: 'CoreData Research',
            info: [
                {
                    position: 'Web Developer (Dec 2016 - July 2018)',
                    description: 'Developed a report generation tool using javascript; provided custom programming for online surveys',
                },
                {
                    position: 'Junior Web Developer (Nov 2015 - Dec 2016)',
                    description: 'Helped in the design of online survey layouts, corporate website maintenance, database administration',
                },
            ],
        },
    ],
    education: [
        {
            school: 'University of the Philippines Los Baños',
            duration: '2006 - 2015',
            course: 'BS Computer Science',
        },
        {
            school: 'Marikina Science High School',
            duration: '2002 - 2006',
            course: 'Secondary Education',
        },
    ],
    skills: [
        {
            name: 'React JS',
            score: 5,
        },
        {
            name: 'Node JS',
            score: 4,
        },
        {
            name: 'Loopback 4 API',
            score: 5,
        },
        {
            name: 'Git',
            score: 4.5,
        },
        {
            name: 'SQL',
            score: 4.5,
        },
        {
            name: 'MongoDB',
            score: 4.5,
        },
        {
            name: 'HTML',
            score: 4.5,
        },
        {
            name: 'CSS',
            score: 4.5,
        },
    ],
    trainings: [
        {
            name: 'Linux System Administration',
            description: 'ActiveLearning Inc, May 2017'
        },
        {
            name: 'ITIL V4 Basics',
            description: 'Metrobank, September 2021'
        }
    ],
    awards: [
        {
            name: 'Team Player Award 2016',
            company: 'Coredata Research Services, Inc.'
        },
        {
            name: 'Team Player Award 2017',
            company: 'Coredata Research Services, Inc.'
        },
    ],
};