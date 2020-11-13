import { getRepository } from 'typeorm';

import Lesson from './../../entities/Lesson';

export default class ListLessonService{
	public async execute(lesson_id: string): Promise<Lesson>{
		const lessonRepository = getRepository(Lesson);

		const lesson = await lessonRepository.findOne({
			where: {
				id: lesson_id
			}
		});

		if(!lesson){
			throw new Error('This lesson does not exists');
		}

		return(lesson);
	}
}