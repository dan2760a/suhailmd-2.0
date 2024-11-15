const fs = require('fs-extra');
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "+254789532744 ,null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254789532744";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_12_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDg1LFxuICAgICAgICA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgyLFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA3LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM3hGZ2hJc0hoVzF4L0pTbFFvSFYrZnZsTUpsTDE5RHowbTc5MzNtTTQ0ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOXVyaEdmTXRTVmVoR0d0blB3cXRXUVwiLFxuICBcInBob25lSWRcIjogXCI3ODY0ZmM0MS1iNDkyLTRmYmMtYjEzZC1mYmE4MWYxZGRhY2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDE2NCxcbiAgICAgIDU2LFxuICAgICAgMTM5LFxuICAgICAgMTYwLFxuICAgICAgMTUyLFxuICAgICAgMjM5LFxuICAgICAgODksXG4gICAgICAxNDAsXG4gICAgICA0LFxuICAgICAgNTEsXG4gICAgICAyMDAsXG4gICAgICAxODYsXG4gICAgICA0MyxcbiAgICAgIDIxMSxcbiAgICAgIDEyMixcbiAgICAgIDczLFxuICAgICAgNTgsXG4gICAgICA0OCxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMTAxLFxuICAgICAgMTM1LFxuICAgICAgMjQsXG4gICAgICAyMzAsXG4gICAgICA1MyxcbiAgICAgIDE0MSxcbiAgICAgIDEzMSxcbiAgICAgIDI0MCxcbiAgICAgIDU3LFxuICAgICAgOTIsXG4gICAgICA2MSxcbiAgICAgIDU4LFxuICAgICAgMTQwLFxuICAgICAgMTUsXG4gICAgICA3MixcbiAgICAgIDIxLFxuICAgICAgODYsXG4gICAgICAxMTEsXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1Q1RFFFOVdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc2ODMwNzYxMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjkwNTU0NzEzMzAxNjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tEYnQvWURFTExXM3JrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSE5acnRvN2VvNUQ4WW8yYUJvYTZBL09KbStncGJDTDdIYzNRU1BCYXlRZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtMWNGQUJ0UVJGOHBKOWJlYXIzMWdiT21jbmF0cTZHdytRNzlXYXBjdjA1VXhIbklQQzdrc2QxSktGN2NGai9rVEU0UWxLNjVJYzdydzRmbUFuMDREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjZ0YvRmd0S0tyL09EQURXQ2hpUkJLUnVLWlhubldZRldLdXFkVTF3Mnd6S2FNTlUzV2tzd2liYkkrRm1Ubkx5cmFKdmp6bG1oT0JQRWVMb3hLSHdDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NjgzMDc2MTM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxNzAxNTU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUdYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJR1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSQklOZEwrSFg3TGhFd0x3dDZoR3VrWGhaSmVLRzdmb1VrU0FvUDVmTFVRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTM2ODMxMDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTcwMTQ5MTgyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
