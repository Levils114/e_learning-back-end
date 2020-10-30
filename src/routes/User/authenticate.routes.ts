import express, { json } from 'express';

import AuthenticateUserService from './../../services/User/AuthenticateUserService';


const authenticateRoutes = express();
authenticateRoutes.use(json());

authenticateRoutes.post('/', async(request, response) => {
	const { email, password } = request.body;

	const authenticateUserService = new AuthenticateUserService();

	const { user, token } = await authenticateUserService.execute({ email, password });

	delete user.password;

	response.json({ user, token });
});

export default authenticateRoutes;
