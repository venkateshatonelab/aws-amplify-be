import { Schema, model } from 'mongoose';
import Credentials from '../../interfaces/auth';

const CredentialSchema: Schema<Credentials> = new Schema({
	username: { type: String, unique: true, minlength: 6, maxlength: 30 },
	password: { type: String, minlength: 6 },
});

export default model('Credentials', CredentialSchema);
