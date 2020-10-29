import { getRepository } from 'typeorm';

import Lesson from './../../entities/Lesson';

interface IUpdateLessonService{
	lesson_id: string;
	name?: string;
	duration?: number;
	description?: string;
	video_id?: string;
}

export default class UpdateLessonService{
	public async execute({ lesson_id, name, duration, description, video_id }: IUpdateLessonService): Promise<Lesson>{
		const lessonRepository = getRepository(Lesson);

		const lesson = await lessonRepository.findOne({
			where: {
				id: lesson_id
			}
		});

		if(!lesson){
			throw new Error('This course dont exists');
		}

		lesson.name = !!name ? name : lesson.name;
		lesson.duration = !!duration ? duration : lesson.duration;
		lesson.description = !!description ? description : lesson.description;
		lesson.video_id = !!video_id ? video_id : lesson.video_id;

		await lessonRepository.save(lesson);

		return(lesson);
	}
}