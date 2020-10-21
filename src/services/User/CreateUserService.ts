import { getRepository } from 'typeorm';

interface IExecute{
	name: string;
	email: string;
	password: string;
}

export default class CreateUserService{
	async function execute({ name, email, password }: IExecute): Promise<IExecute>{
		try{
			const userRepository = getRepository('user');

			const checkEmail = await userRepository.find({ where: {
				email
			} });

			if(!!checkEmail){
				throw new Error('Email already in use');
			}

			const user = await userRepository.create({ name, email, password });

			return(user);
		} catch(err){
			throw new Error(err);
		}
		
	};
}