module.exports = (app) => {
	const router = app.get('express').Router();
	const TelegramService = app.get('TelegramService');
	const database = app.get('database');

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.send('It\'s me Mario');
	});

	function parseList (list) {
		// list = list.split('\n')
		console.log(list);
	}

	router.post('/', (req, res, next) => {
		let message = req.body.message;
		let msg = null;
		if (message.text[0] === '\\') {
			switch (message.match(/\\.+?(?=[@|\s])/)) {
				case "\\precos":
					msg = "precos";
					break;
				case "\\atualizar":
					msg = "Não entendi.\nUse \\atualizar@laricaco_bot \npreco1 - produto1\npreco2 - produto2";
					let begin;
					if (begin = message.text.indexOf('\n') === -1) {
						try {
							parseList(message.text.substr(begin + 1, message.text.length));
							msg = 'Preços atualizados com sucesso!';
						} catch (err) {
							console.log(err);
						}
					}
					break;
			}
		} else {
			// TODO: Processar como um texto
			let text = message.text;
			if (text.split(' ').find('Berto')) {
				msg = "Loto";
			}
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
