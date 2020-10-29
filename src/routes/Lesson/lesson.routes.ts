import express, { json } from 'express';

import CreateLessonService from './../../services/Lesson/CreateLessonService';
import UpdateLessonService from './../../services/Lesson/UpdateLessonService';

import JWTvalidation from './../../utils/JWTverification';

const lessonRoutes = express();
lessonRoutes.use(json());

lessonRoutes.post('/', JWTvalidation, async(request, response) => {
	const { name, duration, course_id, description, video_id } = request.body;

	const createLessonService = new CreateLessonService();

	const lesson = await createLessonService.execute({ name, duration, course_id, description, video_id });

	return response.json(lesson);
});

lessonRoutes.put('/:id', JWTvalidation, async(request, response) => {
	const { id } = request.params;
	const { name, duration, description, video_id } = request.body;

	const updateLessonService = new UpdateLessonService();

	const lesson = await updateLessonService.execute({ lesson_id: id, name, duration, description, video_id });

	return response.json(lesson);
})

export default lessonRoutes;
