import { getRepository } from 'typeorm';

import Course from './../../entities/Courses';
import Lesson from './../../entities/Lesson';

export default class ListCoursesService{
	public async execute(): Promise<Course[]>{
		const courseRepository = getRepository(Course);
		const lessonRepository = getRepository(Lesson);

		const courses = await courseRepository.find();
		const lessons = await lessonRepository.find();

		const coursesFormated = courses.map(course => {
			const lessonsInCourse = lessons.findIndex(lesson => (lesson.course_id === course.id)) + 1;

			return({
				...course,
				lessonsInCourse
			});
		});

		return(coursesFormated);
	}
}