import express, { json } from 'express';

import JWTvarification from './../../utils/JWTverification';

import CreateCourseService from './../../services/Courses/CreateCourseService';

const coursesRoute = express();
coursesRoute.use(json());

coursesRoute.post('/', JWTvarification, async(request, response) => {
	const { name } = request.body;

	const createCourseService = new CreateCourseService();

	const course = await createCourseService.execute({ name });

	return response.json(course);
})