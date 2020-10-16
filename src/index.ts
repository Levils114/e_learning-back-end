import express, { json } from 'express';

const app = express();
app.use(json());

app.get('/', (request, response) => {
	return response.json({ message: 'tá dando certo, viu' });
})

app.listen(3333, () => {
	console.log('tá rodando viu 💻');
})