import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Remedios de Escalada, Argentina',
		logo: Assets.Unla,
		name: '',
		organization: 'Universidad Nacional de Lanús',
		period: { from: new Date(2022, 3, 1), to: new Date() },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Data Structure', 'AGILE Methodologies', 'Oriented Objet Programming', 'Java', 'Spring', 'Hibernate', 'MySQL'] 
	}
];

export const title = 'Education';
