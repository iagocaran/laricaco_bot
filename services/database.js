Sequelize = require('sequelize');
DataTypes = Sequelize.DataTypes;

const sequelize = new Sequelize(process.env.DATABASE_URL);

const model = {
	Data: sequelize.define('data', {
		content: DataTypes.JSON
	})
};

sequelize.sync()
	.then((msg) => {
		// console.log(msg);
	});

module.exports = {
	sequelize,
	model
};
