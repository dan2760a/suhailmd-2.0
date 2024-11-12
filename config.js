ipconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
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
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_07_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTgzLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0LFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjksXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImw1c3grS2NWamtKa1pldk1FaTFCNEJuTzJhVVByK0sxVVZKQUtkcHVqQzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzY4MzA3NjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QjE5NDBBQzhCREI2NkZFRUQyRDIxMEMyRjBFQzI4MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEzNzAwNDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwielNiNEw3ZlBTWXk1RmU3RkVtRFA0UVwiLFxuICBcInBob25lSWRcIjogXCJkYWQ2MTYxYS1mZGJiLTQ0MDctYjlhZS01ZDMyMzNjYzIyYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMjAyLFxuICAgICAgMTg1LFxuICAgICAgMjA3LFxuICAgICAgMyxcbiAgICAgIDUxLFxuICAgICAgMjEyLFxuICAgICAgNTksXG4gICAgICA4NyxcbiAgICAgIDIwOSxcbiAgICAgIDgwLFxuICAgICAgOTYsXG4gICAgICAyMjMsXG4gICAgICAxNzMsXG4gICAgICAyMTcsXG4gICAgICAxNixcbiAgICAgIDIxMCxcbiAgICAgIDIyMSxcbiAgICAgIDUzLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICAyMTUsXG4gICAgICA0LFxuICAgICAgMjE0LFxuICAgICAgMjQyLFxuICAgICAgMTE2LFxuICAgICAgNDIsXG4gICAgICAyMzUsXG4gICAgICAxNzksXG4gICAgICAxNzIsXG4gICAgICAxNzksXG4gICAgICAxMzEsXG4gICAgICAxOTIsXG4gICAgICAxMzMsXG4gICAgICAyMjUsXG4gICAgICAxMDEsXG4gICAgICAxNjQsXG4gICAgICAxNjEsXG4gICAgICAxMjksXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKL2J0L1lERUxpNHlya0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhOWnJ0bzdlbzVEOFlvMmFCb2E2QS9PSm0rZ3BiQ0w3SGMzUVNQQmF5UWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTlpHc0JjVTRnVE00OW4xQVZkYk95TUp4V29GelQ5OTFqcXRSLzllOTdWYlNOVm15ZXU5bkRyaFFhdytUdGd2WGo5QUhvSENEVndlMnAzWnppWDJVQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidlBaQk50MnpnOGNxRTBTa2NzcXpqSUZERmJIdWZxbmMzdk1BMW9PNGRDRk5PaktPaVcwQnA3U09MQk4zQ1hRZU95QXdLK2QwT0FGVTFqejVwSGs5Z2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NjgzMDc2MTM6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyOTA1NTQ3MTMzMDE2Ojg4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY4MzA3NjEzOjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzNzAwNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFTDZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVMMC5qc29uIjogIntcImtleURhdGFcIjpcIi82K3ZWN1pMZjM5WkY0QVJjYytLVXQvSkFjbXQvenZMUDNYS3dQYXYwOTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1MzY4MzEwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMxMzEyMzY3ODAyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUwxLmpzb24iOiAie1wia2V5RGF0YVwiOlwicHZGaU9BNzRUQ0pneEZxMmsrUXBQRTUxSU5mRi96T0pOVGNNSXRGTjljaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDUzNjgzMTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxMzEyNDk3MjgwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUwyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMDFyemZmV0phR2VBSm96QUJ2dUV4ZTVlOHQzMTUrRGs2L1VIZVBhSWhSMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDUzNjgzMTAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwYmVFZ3V6SVpKcHhBQVBwOHF6N3Q1KzV3bEJyajJkVm0rSHdXRHpBRXdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTM2ODMxMDMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3a0ZPTW5td1RBRklkWTI2NU1MY1BsdkpUekFEc0RDN2JaR1MzOC9XL2xnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTM2ODMxMDMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUw1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibEdtY0VOQS9wYlgxZkdqRlhtR0J1aHpnMFpyR2tkQ1N3ZTdyZmxrU1diTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDUzNjgzMTAzLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFTDYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUR2xvNk1na0VXZ0hXZks0bHVQcStMSEpDWkIvTmRJUmJnWjhVV2NTcHM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTM2ODMxMDMsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMTczMTM2Mzg4MDMwN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVMNy5qc29uIjogIntcImtleURhdGFcIjpcIm5Uc252NC9NVzFmYkxNN1diemZpcTFGYTNiVzRNT3I2bkFJTWx5WVVEOTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1MzY4MzEwMyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIxNzMxMzY5OTk2NDcxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUw4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwidVN4M1M3RlcvLzVtWHhsUldIS1FoQ3hvVVIwRkc1TFY5alFIWFJyQUZBRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDUzNjgzMTAzLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw1LDZdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVMOS5qc29uIjogIntcImtleURhdGFcIjpcInJIeTJUMzhRclVXb08zWFVjTjBUN0JwbUh2Sng3SVFpK1NUYXQ0cEREcms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA1MzY4MzEwMyxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNV19LFwidGltZXN0YW1wXCI6XCIxNzMxMzcwMDMwNjk5XCJ9Igp9"  // PUT your SESSION_ID 


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
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
