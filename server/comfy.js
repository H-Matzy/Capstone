require('dotenv').config();
const ComfyJS = require("comfy.js");

ComfyJS.Init( "hmatzy" );
ComfyJS.Init( process.env.TWITCH_USERNAME, process.env.TWITCH_AUTH_CODE);

ComfyJS.onChat = ( user, message, flags, self, extra ) => {
	console.log( user, message );
  };


ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
  if( command === "test" ) {
    ComfyJS.Say( "replying to !test" );
  }
}
