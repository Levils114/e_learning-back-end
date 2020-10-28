import { getRepository } from 'typeorm';

import Course from './../../entities/Courses';

interface IUpdateCourseImage{
	course_id: string;
	file: string;
}

export default class UpdateCourseImage{
	public async execute({ course_id, file }: IUpdateCourseImage): Promise<Course>{
		const courseRepository = getRepository(Course);

		const course = await courseRepository.findOne({
			id: course_id
		});

		if(!course){
			throw new Error('this course dont exists');
		}

		course.image = file;

		await courseRepository.save(course);

		return(course);
	};
}