require('dotenv').config();
const tmi = require('tmi.js');
const ComfyJS = require("comfy.js");

// const client = new tmi.Client({
// 	options: { debug: true, messagesLogLevel: "info" },
// 	connection: {
// 		reconnect: true,
// 		secure: true
// 	},
// 	identity: {
// 		username: process.env.TWITCH_USERNAME,
// 		password: process.env.TWITCH_AUTH_CODE
// 	},
// 	channels: [process.env.TWITCH_USERNAME]
// });
// client.connect().catch(console.error);
// client.on('message', (channel, tags, message, self) => {
// 	if(self) return;
// 	if(message.toLowerCase() === '!whats-good') {
// 		client.say(channel, `@${tags.username}, Whats good holmes!`);
// 	}
// 	else if(message.toLowerCase() === 'uwu') {
// 		client.say(channel, `@${tags.username}, UwU`)
// 	}
// 	else if (typeof(message) == "string") {
// 		client.say(channel, `@${tags.username}, You just sent a message yo!`)
// 	}
// 	// console.log(channel, message, tags, self);
// });

ComfyJS.Init( "hmatzy" );
ComfyJS.Init( process.env.TWITCH_USERNAME, process.env.TWITCH_AUTH_CODE);

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
	console.log( user, message );
  };