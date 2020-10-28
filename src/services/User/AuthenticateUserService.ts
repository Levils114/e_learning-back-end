import { getRepository } from 'typeorm';

import User from './../../entities/User';

import { compare } from 'bcryptjs';

import jwt from 'jsonwebtoken';

interface IAuthenticateUserService{
	email: string;
	password: string;
}

export default class AuthenticateUserService{
	public async execute({ email, password }: IAuthenticateUserService): Promise<any>{
		const user = await getRepository(User).findOne({
			where: {
				email
			}
		});

		if(!user){
			throw new Error('Email/Password incorrect');
		}

		const checkUserPassword = await compare(password, user.password);

		if(!checkUserPassword){
			throw new Error('Email/Password incorrect');
		}

		const token = jwt.sign({}, 'default', {
			subject: user.id,
			expiresIn: '1d'
		});

		return ({
			user, token
		});
	}
}