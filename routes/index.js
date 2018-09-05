module.exports = (app) => {
	const router = app.get('express').Router();
	const axios = app.get('axios');
	const api = 'https://api.telegram.org/bot' + app.get('telegramToken');
// const database = app.get('database');


	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.send('It\'s me Mario');
	});

	router.post('/', (req, res, next) => {
		try {
			let msg = req.body.message;
			axios.post(api + '/sendMessage', {
				chat_id: msg.chat.id,
				text: 'Hoje tem IFCH?',
				parse_mode: 'HTML',
				disable_notification: true,
				reply_to_message_id: msg.message_id
			})
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					throw err;
				})
		} catch (err) {
			console.log(err);
		}
	});

	return router;
};
