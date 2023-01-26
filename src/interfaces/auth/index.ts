import { Schema } from 'mongoose';

interface Authorization {
	username: string;
	password: string;
}

export default Authorization;
