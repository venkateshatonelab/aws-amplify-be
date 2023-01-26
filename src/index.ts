import express, { Express } from 'express';

import auth from './routes/auth';
import config from './config/app.config';
import database from './utils/database';
import cors from './middlewares/cors.middleware';

const app: Express = express();

app.use(express.json());
app.use(cors);

database(config.db.MONGODB_URI);

app.get('/', (req, res) => {
	res.status(201).json({ message: 'hello' });
});
app.use('/api/auth', auth);

app.listen(config.app.PORT, () => {
	console.log(`\n===========App listening on port ${config.app.PORT}===========\n`);
});

export default app;
