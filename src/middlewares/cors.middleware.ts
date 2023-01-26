import cors from 'cors';

const options: cors.CorsOptions = {
	allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
	credentials: true,
	preflightContinue: true,
};

export default cors(options);
