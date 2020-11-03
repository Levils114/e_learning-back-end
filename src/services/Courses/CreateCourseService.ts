import { getRepository } from 'typeorm';

import Course from './../../entities/Courses';

interface ICreateCourseService{
	name: string;
	image: string;
}

export default class CreateCourseService{
	public async execute({ name, image }: ICreateCourseService): Promise<Course>{
		const courseRepository = getRepository(Course);

		const course =  await courseRepository.create({ name, image });

		await courseRepository.save(course);

		return(course);
	}
}