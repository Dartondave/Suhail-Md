const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Imo,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md/main/lib/assets/sukuna.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻" 


global.devs = "2347038336733" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347038336733";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347038336733";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_25_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJod08rYTlrQzhSREpoWXhTSDQzUEJWWFRIVVdyc1EzNEdBS0FLMWI3SEJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzgzMzY3MzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhBODczREU4NjI2OEFEMUUzQTE0Nzc1MzE3OTBERkZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ4OTEzOFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRLTZ6ZXJ2S1RXV19QdmFHelctWmRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImU2MGQ0MmRmLWZhNWEtNGU0My1iYzM3LWEwMGI0NjgzYWJmM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAyNyxcbiAgICAgIDYwLFxuICAgICAgMzIsXG4gICAgICAxMzIsXG4gICAgICAxODUsXG4gICAgICAyNDgsXG4gICAgICAyMjYsXG4gICAgICAxNTYsXG4gICAgICAxMzksXG4gICAgICAxODUsXG4gICAgICAxNjQsXG4gICAgICAxOTUsXG4gICAgICAzNCxcbiAgICAgIDEzNCxcbiAgICAgIDIyNyxcbiAgICAgIDg3LFxuICAgICAgMjM0LFxuICAgICAgMTQxLFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgMzAsXG4gICAgICAyNDksXG4gICAgICAyMDcsXG4gICAgICAxOTksXG4gICAgICAyMzcsXG4gICAgICAxNDUsXG4gICAgICAxNDYsXG4gICAgICA2OCxcbiAgICAgIDY4LFxuICAgICAgMjAzLFxuICAgICAgMTAsXG4gICAgICAyMjcsXG4gICAgICAyMTIsXG4gICAgICAxMjEsXG4gICAgICAxNDIsXG4gICAgICAyMzUsXG4gICAgICAxNDIsXG4gICAgICAyMzYsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFdUN1k1SEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzgzMzY3MzM6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ0NjM3NjQ1NDU5NDkwOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01qTHdvTUZFT2V0NzdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUkRTTGpGc1NGTnRFVm9OWTlXdHVrMHBRT3Z6TVM2ejNOTEhSeE14Y2FWbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWZzJ4TDJjcitXS0lJazIrSWNWNnVmSzVjam96eUo0VTBQREFoalpHR2NWUm82R3RhbDU5VjhUbFY5REVpb3lOeFRiYlVLa1JxeGdjS0NSVTB6QXNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCTk5qTi9SNmFVZUdYOEcyWTdRY3lqbGxpT1BMWHEvdFlKeUlhcmtEK0REZkphMDBjcUZwV0lsS3F4Z1N2dWMxbjlxZ2xGbjNqRzhCd2UrSEFrcjhpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDM4MzM2NzMzOjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDg5MTMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2JQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHYlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQWjhvTFo5dVhFRFFjUzBhYzhqSVRSN1FPVi9jVytsVVEvTTNIeERHRnQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNDk1NTk3NTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTQzNDU2MzQwOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻 』```", //*『sᴜʙsᴄʀɪʙᴇ • 𝔻𝔸ℝ𝕋𝕆ℕ 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝔻𝔸ℝ𝕋𝕆ℕ_𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "𝔻𝔸ℝ𝕋𝕆ℕ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔻𝔸ℝ𝕋𝕆ℕ"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md/main/lib/assets/sukuna.jpeg",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
