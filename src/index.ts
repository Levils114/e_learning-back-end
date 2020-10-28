import express, { json } from 'express';

import userRoutes from './routes/User/user.routes';
import authenticateRoutes from './routes/User/authenticate.routes';

import './typeorm/server';

const app = express();
app.use(json());

app.use('/user', userRoutes);
app.use('/authenticate', authenticateRoutes);

app.listen(3333, () => {
	console.log('tá rodando viu 💻');
})