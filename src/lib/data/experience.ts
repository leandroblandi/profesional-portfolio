import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'backend-software-developer-junior',
		company: 'Certant',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 12, 18), to: new Date() },
		skills: getSkills('spring', 'java', 'spring-security'),
		name: 'Backend Developer',
		color: 'green',
		links: [],
		logo: Assets.Certant,
		shortDescription: 'As a backend developer, I perform various backend-oriented tasks such as analysis, development, implementation, and support, often working with microservices-oriented web applications hosted on AWS.'
	},
	{
		slug: 'software-freelance-trainee',
		company: 'Internship',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 5, 1), to: new Date(2023, 8, 1) },
		skills: getSkills('sass', 'html', 'angular'),
		name: 'Frontend Developer',
		color: 'green',
		links: [],
		logo: Assets.Jrc,
		shortDescription: 'I was part of a development team where we designed and developed a complete web application using Nest.js on the backend and Angular as the frontend client.'
	}
];

export const title = 'Experience';
