Sequelize = require('sequelize');
DataTypes = Sequelize.DataTypes;

const sequelize = new Sequelize(process.env.DATABASE_URL);

const Data = sequelize.define('data', {
	content: DataTypes.JSON
});

sequelize.sync()
	.then(() => {
		Data.findOne()
			.then((data) => {
				if (!data) {
					return Data.create({ content: [] })
				}
			})
	});

function getData() {
	return Data.findOne()
		.then((data) => {
			return data;
		})
}

function setData(data) {
	return Data.update({ content: data }, { where: { id: 1 } })
		.then(() => {

		})
}

module.exports = {
	getData,
	setData
};
