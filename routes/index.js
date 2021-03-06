module.exports = (app) => {
	const router = app.get('express').Router();
	const TelegramService = app.get('TelegramService');
	const database = app.get('database');

	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.send('It\'s me Mario');
	});

	function parseList (list) {
		list = list.split('\n');
		list = list.slice(1, list.length);
		let data = [];
		list.forEach((line) => {
			let splitLine = line.split(' - ');
			if (!isFinite(parseFloat(splitLine[0]))) throw new Error('Valor inválido para o preço de ' + splitLine[1] + '.');
			data.push({ product: splitLine[1], price: parseFloat(splitLine[0]) });
		});
		database.setData(data);
	}

	router.post('/', async (req, res, next)  => {
		let message = req.body.message;
		let msg = 'Recebi';

		if (!message.text) {
			res.send(200);
			return;
		}

		if (message.text.startsWith('/')) {
			let match = message.text.match(/\/.+?[@\s]|\/.+\b/)[0];
			switch (match.substr(1, match.length).replace(/@/, '')) {
				case "precos":
					let data = await database.getData();
					msg = '';
					console.log(data);
					data.content.forEach((line) => {
						msg += 'R$ ' + line.price.toFixed(2) + ' - ' + line.product + '\n';
					});
					break;
				case "atualizar":
					msg = "Use /atualizar@laricaco_bot \npreco1 - produto1\npreco2 - produto2";
					let begin;
					if (begin = message.text.indexOf('\n') !== -1) {
						try {
							parseList(message.text.substr(begin + 1, message.text.length));
							msg = 'Preços atualizados com sucesso!';
						} catch (err) {
							console.log(err);
							msg = err.message;
						}
					}
					break;
			}
		} else {
			// TODO: Processar como um texto
			let text = message.text;
			if (text.split(' ').includes('Berto')) {
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
