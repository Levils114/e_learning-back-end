import express, { json } from 'express';

import userRoutes from './routes/User/user.routes';
import authenticateRoutes from './routes/User/authenticate.routes';

import coursesRoutes from './routes/Courses/courses.routes';

import lessonRoutes from './routes/Lesson/lesson.routes';

import './typeorm/server';

const app = express();
app.use(json());

app.use('/user', userRoutes);
app.use('/authenticate', authenticateRoutes);

app.use('/courses', coursesRoutes);

app.use('/lessons', lessonRoutes);

app.listen(3333, () => {
	console.log('tá rodando viu 💻');
})