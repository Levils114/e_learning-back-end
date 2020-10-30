import { getRepository } from 'typeorm';

import Course from './../../entities/Courses';

export default class LIstCoursesService{
	public async execute(): Promise<Course[]>{
		const courseRepository = getRepository(Course);

		const courses = await courseRepository.find();

		return(courses);
	}
}