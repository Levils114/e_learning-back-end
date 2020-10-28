import { getRepository } from 'typeorm';

import { hash } from 'bcryptjs';

import User from './../../entities/User';

interface IExecute{
	name: string;
	email: string;
	password: string;
}

class CreateUserService{
	public async execute({ name, email, password }: IExecute): Promise<User>{
		const userRepository = getRepository(User);

		const checkEmail = await userRepository.findOne({ where: {
			email
		} });

		if(!!checkEmail){
			throw new Error('Email already in use');
		}

		const passwordEncrypted = await hash(password, 8);

		const user = await userRepository.create({ name, email, password: passwordEncrypted });

		await userRepository.save(user);

		return(user);
	};
}

export default CreateUserService;