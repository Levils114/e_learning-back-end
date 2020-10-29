import { getRepository } from 'typeorm';

import Lesson from './../../entities/Lesson';
import Course from './../../entities/Courses';

interface ICreateLessonService{
	name: string;
	duration: number;
	course_id: string;
	description: string;
	video_id: string;
}

export default class CreateLessonService{
	public async execute({ name, duration, course_id, description, video_id }: ICreateLessonService): Promise<Lesson>{
		const lessonRepository = getRepository(Lesson);
		const courseRepository = getRepository(Course);

		const checkCourse = await courseRepository.findOne({
			where: {
				id: course_id
			}
		});

		if(!checkCourse){
			throw new Error("course don't exists");
		}

		const lesson = await lessonRepository.create({ name, duration, course_id, description, video_id });

		await lessonRepository.save(lesson);

		return(lesson);
	}
}