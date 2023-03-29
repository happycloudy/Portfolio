import {ISkill} from "../types/skillsHeadingsType";

const htmlcssSkills = [
    'HTML',
    'CSS',
    'CSS Modules',
    'Styled components',
    '@emotion',
    'SASS (SCSS)',
]

const jsSkills = [
    'Javascript',
    'Typescript',
    'React',
    'Redux & RTK',
    'React-hook-form',
    'React router',
    'Axios',
    'Webpack',
    'Vite',
]

const nodejsSkills = [
    'Node.js',
    'Express',
    'Nest',
    'TypeORM',
    'Sequelize',
    'Mongoose',
    'Strapi',
]

export const skills: ISkill[] = [
    {
        name: 'FRONTEND',
        categories: [
            {
                name: 'HTML & CSS',
                list: htmlcssSkills
            },
            {
                name: 'Javascript',
                list: jsSkills
            }
        ]
    },
    {
        name: 'BACKEND',
        categories: [
            {
                name: 'Node.js',
                list: nodejsSkills
            }
        ]
    },
]