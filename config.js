const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0ZxSllSYTVUNkNRejNSWDV3dzdIV0ZEVmswWWpFTmVGSnl3a1IyQ0JIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNBcEhTaUtvWU1uVEFHSk9ITlRBU2xlVytOb3FKaEp1L0Q0VDJtdmJUND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSWJNbVdXaVNLZUFhRE1hRlhpVVU4eWhiRy9LUm5HN2h4SUlrc3VtcFVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwMzdJV2FITnprSk1lamFRU01SZDcxUURrYVNtWkRxa01GbGZrTzNKblRrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVGeGs3ZXNvVVcrS2NBV3BPSVEvSWwxazhYV3VvYWR0OWtrSk4zUS9JRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQ4Nnhod0t1MSs2dGhmVTkxU0RIRWkwMjdQK2tNeFBoU1VLWWt4MXJ1VU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0Q2TmlWOFJRbFZ4aDFsSzA2S1Q0VytuNk80R1Z4UUY5MDhxeW5KSE5rRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGpsUVFJYVoydjdBWGFjcGhMODNTWS9zVEhtTkJmNVp2dWVjN3hHT28xOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpZZnFDb2l0Z0hKb0hXeFV6N0lzeUQ0ZnBNQWlCRjZsRHJBcG10UG5sYlo2N0s3ekNFbFdmenNCblpVRkZSK3lzVHp0TjlCN05XRFQ2dW1DSXlSL2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJwTG5ZZ3ZsRTlXbVJvWTFRcHY5ZVgrQnNyZFBDaWZodTdJNWQvcldOVVFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJRUlNUWFpEQiIsIm1lIjp7ImlkIjoiOTIzMzQ1ODAwODM5OjUwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJPwnZCH8J2QhCDwnZCN8J2aq+qqneGNndaf8J2aq/CdkIEg8J2QiPCdkI3wnZCX8J2QiPCdkIPwnZCEJ+qqneGNndafwrvijItcbvCThqnwlqSN8JOGqlxuXG7iuJTiuJVcblxu4riU4riVXG5cbuK4lOK4lVxuXG7iuJTiuJVcblxu4riU4riVXG5cbuK4lOK4lVxuXG7iuJTiuJVcblxu4riU4riVXG5cbvCThqnwnZCM8J2QjvCdkJLwnZCTIOGPh/CdmqvwnZCN8J2Qk+GPi/CdkIPwk4aqIiwibGlkIjoiMTM0Mjk1NDkwNDA4Njg1OjUwQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUHU0N2ZNRkVJSDM5OFVHR0FvZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiclRBSmIxeTYwUWhuWUtNUFFkTmlqd1hDZ2hUL2dxRW8zYzkzeFZ6Wk9pST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiblAxMk8rNXkxenBwdEhJcFdzTXh5U3dRUXJqNHRrZzFKVWlVdHRZV0lVRk80M1o5eWkvekFiTlRwZUZLMXJiTGUyUGNXamhpY1dZRkFTdDlMR0l1Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6InE1VXVaK2w0Q3Nkam5Sa2ZyTnVRSGlJTi9hejlONEo4a3NqcHRKUXlGT2dxYm1oY1NSRkc2a3llUjdQcmtLMVZkeWpKaTFyT1lyZlBaYjc5d0RVNmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzQ1ODAwODM5OjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmEwd0NXOWN1dEVJWjJDakQwSFRZbzhGd29JVS80S2hLTjNQZDhWYzJUb2kifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzI4MTE1OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFNG0ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/j9G5tmNM/shaban-md.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923345800839",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "NAWAB_INXIDE,W",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/tasodv.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *SHABAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923043788282",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
