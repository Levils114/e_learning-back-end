import express, { json } from 'express';

import JWTvarification from './../../utils/JWTverification';

import CreateCourseService from './../../services/Courses/CreateCourseService';
import UpdateCourseService from './../../services/Courses/UpdateCourseService';
import UpdateCourseImage from './../../services/Courses/UpdateCourseImage';
import ListCoursesService from './../../services/Courses/ListCoursesService';
import ListLessonsFromCourse from './../../services/Courses/ListLessonsFromCourse';

import formidable from 'formidable';

import fs from 'fs';

import os from 'os';

const coursesRoutes = express();
coursesRoutes.use(json());

coursesRoutes.post('/', JWTvarification, async(request, response) => {
	const { name, image } = request.body;

	const createCourseService = new CreateCourseService();

	const course = await createCourseService.execute({ name, image });

	return response.json(course);
});

coursesRoutes.put('/:id', JWTvarification, async(request, response) => {
	const { id } = request.params;
	const { newName, newImage } = request.body;

	const updateCourseService = new UpdateCourseService();

	const course = await updateCourseService.execute({ course_id: id, newName, newImage });

	return response.json(course);
})

coursesRoutes.patch('/update-image/:course_id', JWTvarification, async(request, response) => {
	const { course_id } = request.params;

	const form = new formidable.IncomingForm();

	const updateCourseImage = new UpdateCourseImage();

	form.parse(request, (err, fields, files) => {
		const oldFolder = files.filetoupload.path;
		const newFolder = '/home/levi/Desktop/e_learning/back-end/assets/' + files.filetoupload.name;

		fs.rename(oldFolder, newFolder, async(err) => {
			if(err){
				return response.status(401).json({ error: 'there is something wrong in file upload' });
			}

			const course = await updateCourseImage.execute({ course_id, file: newFolder });

			response.json({ course });
		})
	})
});

coursesRoutes.get('/', async(request, response) => {
	const listCoursesService = new ListCoursesService();

	const courses = await listCoursesService.execute();

	return response.json(courses);
});

coursesRoutes.get('/:id/lessons', async(request, response) => {
	const mac_address = request.header('mac_address');
	const { id } = request.params;

	if(!mac_address){
		return response.status(401).json({ message: 'is missing mac ip' });
	}

	const listLessonsFromCourse = new ListLessonsFromCourse();

	const { course, lessons } = await listLessonsFromCourse.execute({ course_id: id });

	return response.json({ course, lessons });
})

export default coursesRoutes;