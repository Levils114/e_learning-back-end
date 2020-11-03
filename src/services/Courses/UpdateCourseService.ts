import { getRepository } from 'typeorm';

import Course from './../../entities/Courses';

interface IUpdateCourseService{
	course_id: string;
	newName?: string;
	newImage?: string;
}

export default class UpdateCourseService{
	public async execute({ course_id, newName, newImage }: IUpdateCourseService): Promise<Course>{
		const courseRepository = getRepository(Course);

		const course = await courseRepository.findOne({
			where: {
				id: course_id
			}
		});

		if(!course){
			throw new Error("course don't exists");
		}

		course.name = !!newName ? newName : course.name;
		course.image = !!newImage ? newImage : course.image;

		await courseRepository.save(course);

		return(course);
	};
}