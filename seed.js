//const {db, Gardener, Plot, Vegetable} = require('./models');
const {db} = require('./models');


db.sync({force: true})
	.then(() => {
		console.log('DB Synced');
	})
	.catch(error => {
		console.log(error);
	})
	.finally(() => {
		db.close();
	})
