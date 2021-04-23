import {Course} from './models';

export const CurrentCourses: Course[] = [
  {
    id: 1,
    name: 'Angular',
    title: 'Angular - The Complete Guide (2021 Edition)',
    cost: 12.99,
    description: 'Master Angular 10 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
    category: 1
  },
  {
    id: 2,
    name: 'JavaScript',
    title: 'The Complete JavaScript Course 2021: From Zero to Expert!',
    cost: 12.99,
    description: 'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!',
    category: 1
  },
  {
    id: 3,
    name: 'React',
    title: 'Modern React with Redux [2020 Update]',
    cost: 13.99,
    description: 'Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!',
    category: 1
  },
];
