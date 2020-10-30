import express, { json } from 'express';

import CreateUserService from './../../services/User/CreateUserService';

const userRoutes = express();
userRoutes.use(json());

userRoutes.post('/', async(request, response) => {
	const { name, email, password } = request.body;

	const createUserService = new CreateUserService();

	const user = await createUserService.execute({name, email, password});

	delete user.password;
	
	response.json(user);
});

export default userRoutes;


