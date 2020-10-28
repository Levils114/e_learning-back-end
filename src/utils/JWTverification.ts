import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';

export default function JWTverification(request: Request, response: Response, next: NextFunction){
	const token = request.headers['authorization'];

	if(!token){
		return response.status(401).json({ error: 'token dont provided' });
	}

	const checkToken = jwt.verify(String(token), 'default', (err, decoded) => {
		if(err){
			return response.status(401).json({ error: 'invalid token' });
		}

		next();
	});
}