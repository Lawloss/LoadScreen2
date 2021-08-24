/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Lawloss'un Kedicikleri :)) ";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = true;

/*Video background
Avaiable options:
"backgrounds/videos/video.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/1.webm";

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/1.ogg", name: "Demons"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 50;

/*Enable custom messages?*/
var l_messagesEnabled = false;

/*Enter your custom messages below*/
var l_messages = [
"Enjoy the server",
"Thanks for joining us!",
"Did you know these backgrounds and songs are from Touhou?"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;