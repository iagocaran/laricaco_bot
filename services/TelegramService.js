module.exports = (app) => {
	const axios = app.get('axios');
	const api = 'https://api.telegram.org/bot' + app.get('telegramToken');

	function sendMessage (chat_id, text, reply_to_message_id, disable_notification, parse_mode) {
		console.log()
		return axios.post(api + '/sendMessage', {
			chat_id,
			text: text || '',
			parse_mode: parse_mode || 'HTML',
			disable_notification: disable_notification || false,
			reply_to_message_id
		})
	}

	return { sendMessage };
};
