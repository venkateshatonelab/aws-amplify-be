interface User {
	username: string;
	password: string;
	confirmPassword: string;
	fullName?: string;
	email?: string;
	description?: string;
	institution?: string;
	gender?: string;
	phone?: string;
	address?: string;
}

export default User;
