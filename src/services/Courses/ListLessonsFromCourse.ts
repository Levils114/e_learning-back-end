import { getRepository } from 'typeorm';

import Lesson from './../../entities/Lesson';
import Course from './../../entities/Courses';

interface IListLessonsFromCourse{
	course_id: string;
}

interface IPromise{
	course: Course;
	lessons: Lesson[];
}

export default class ListLessonsFromCourse{
	public async execute({ course_id }: IListLessonsFromCourse): Promise<IPromise>{
		const courseRepository = getRepository(Course);
		const lessonsRespository = getRepository(Lesson);

		const course = await courseRepository.findOne({
			where: {
				id: course_id
			}
		});

		if(!course){
			throw new Error('This course does not exists');
		}

		const lessons = await lessonsRespository.find({
			where: {
				course_id
			}
		});

		if(!lessons){
			throw new Error('This course dont has lessons');
		}

		return({ course , lessons })
	};
}