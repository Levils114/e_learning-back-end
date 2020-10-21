import express, { json } from 'express';

import CreateUserService from './../../services/User/CreateUserService';

const userRoutes = express();
userRoutes.use(json());

userRoutes.post('/', (request, response) => {
	const { name, email, password } = request.body;

	const createUserService = new CreateUserService();

	const user = await CreateUserService.execute({name, email, password});
	

	response.json({ user: user });
});

export default userRoutes;


