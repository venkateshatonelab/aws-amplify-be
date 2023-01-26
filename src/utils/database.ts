import mongoose from 'mongoose';

const database = (URI: string) => {
	return (() => {
		mongoose
			.connect(URI)
			.then((response) => {
				console.info(`\n===========Connected to "${response.connection.name}"===========\n`);
			})
			.catch((error) => {
				console.info('\n===========Failed to connect DB===========\n');
				console.error(error);
			});
	})();
};

export default database;
