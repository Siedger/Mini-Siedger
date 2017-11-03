const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Par Siedger#0130');
});

client.on('message' , (message) => {
	if (message.content == '!scrim') {
			message.channel.send("Horarios Scrim: De Viernes a Domingos (De 4 a 8)", {
			tts:false
			})
	}
	if (message.content == '!mikel') {
			message.channel.send("TheMaik96, mid laner del equipo: Este chico es pura skill con una goodpull bien grande. Solo el lag le para!", {
			tts:false
			})
	}
	if (message.content == '!rivas') {
			message.channel.send("Rivasito, solo laner del equipo: Mejor jugador, streamer y de todo lo que puedas imaginar de EU y pronto mundial!", {
			tts:false
			})
	}
	if (message.content == '!adnayerc') {
			message.channel.send("Adnayerc, support del equipo: Amante del bodyblock, gran defensor de este rol hasta la muerte!!", {
			tts:false
			})
	}
	if (message.content == '!roster') {
			message.channel.send("Roster actual(IDs):\n\u0020\u0020\u0020\u0020-MID: TheMaik96\n\u0020\u0020\u0020\u0020-ADC: LF\n\u0020\u0020\u0020\u0020-Jungle: LF\n\u0020\u0020\u0020\u0020-Support: Adnáyerc\n\u0020\u0020\u0020\u0020-Solo: Rivasito\n\u0020\u0020\u0020\u0020-Suplentes: LF", {
			tts: false
			})
	}
});
client.login(process.env.BOT_TOKEN);
