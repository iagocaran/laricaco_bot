module.exports = (app) => {
	const router = app.get('express').Router();
	const TelegramService = app.get('TelegramService');
// const database = app.get('database');

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.send('It\'s me Mario');
	});

	router.post('/', (req, res, next) => {
		let message = req.body.message;
		let msg = null;
		switch (message.text) {
			case 'Berto':
				msg = 'Loto';
				break;
			case '\\price':
			case '\\price@laricaco_bot':
				msg = 'Preço';
				break;
			default:
				break;
		}
		if (msg) {
			TelegramService.sendMessage(message.chat.id, msg, message.message_id, true)
				.then(() => {})
				.catch((err) => {
					console.log(err);
				});
		}
		res.status(200).send('OK');
	});

	return router;
};
