import express, { json } from 'express';

import JWTvarification from './../../utils/JWTverification';

import CreateCourseService from './../../services/Courses/CreateCourseService';
import UpdateCourseImage from './../../services/Courses/UpdateCourseImage';

import formidable from 'formidable';

import fs from 'fs';

const coursesRoutes = express();
coursesRoutes.use(json());

coursesRoutes.post('/', JWTvarification, async(request, response) => {
	const { name } = request.body;

	const createCourseService = new CreateCourseService();

	const course = await createCourseService.execute({ name });

	return response.json(course);
});

coursesRoutes.patch('/update-image/:course_id', JWTvarification, async(request, response) => {
	const { course_id } = request.params;

	const form = new formidable.IncomingForm();

	const updateCourseImage = new UpdateCourseImage();

	form.parse(request, (err, fields, files) => {
		console.log(files);

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

export default coursesRoutes;