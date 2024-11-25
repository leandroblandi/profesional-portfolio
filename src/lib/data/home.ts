import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Leandro';

export const lastName = 'Blandi';

export const description =
	'Software Developer. Building great things with Spring. Software Engineering Student.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/leandroblandi' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/leandroblandi'
	},
	{
		platform: Platform.Email,
		link: 'leandronblandi@gmail.com'
	}
];

export const skills = getSkills(
	'spring', 
	'spring-security', 
	'hibernate',
	'java', 
	'mongo', 
	'angular', 
	'c'
);
