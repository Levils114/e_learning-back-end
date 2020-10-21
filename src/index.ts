import express, { json } from 'express';

import userRoutes from './routes/User/user.routes';

const app = express();
app.use(json());

app.use('/user', userRoutes);

app.listen(3333, () => {
	console.log('tá rodando viu 💻');
})