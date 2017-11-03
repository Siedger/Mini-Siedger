const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Par Siedger');
    client.user.setPresence({ game: { name: 'embêter Siedger', type: 0 } });

});

client.on('message' , (message) => {
	if (message.content == '!test') {
			message.channel.send("Test", {
			tts:false
			})
	}

});
client.login(process.env.BOT_TOKEN);
