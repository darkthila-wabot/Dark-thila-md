const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/darkthila-wabot/Dark-thila-md/blob/main/images/f1e21e57-733c-4e16-98f3-a780619a296a.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 THILA-MD Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
