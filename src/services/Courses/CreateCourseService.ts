import { getRepository } from 'typeorm';

import Course from './../../entities/Courses';

interface ICreateCourseService{
	name: string;
}

export default class CreateCourseService{
	public async execute({ name }: ICreateCourseService): Promise<Course>{
		const courseRepository = getRepository(Course);

		const course =  await courseRepository.create({ name });

		await courseRepository.save(course);

		return(course);
	}
}