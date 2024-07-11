const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_58_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICA1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc4LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMmVhV2NSRmUzSjlsOWFOeUYzSlQza1pFbGZ5NjViSzQxS3NocGZ0MWJOaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZDlYMEVmTVFSdDJOdFZ1N2JxamhXUVwiLFxuICBcInBob25lSWRcIjogXCIxOTE2NjAxOS0yZWYyLTQyNjktODRkZS02ODZiZGY1ZWQwMzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjE0LFxuICAgICAgMTEyLFxuICAgICAgOTAsXG4gICAgICA4MSxcbiAgICAgIDIxOSxcbiAgICAgIDI1MCxcbiAgICAgIDIzOSxcbiAgICAgIDE1MyxcbiAgICAgIDE5NixcbiAgICAgIDE4MixcbiAgICAgIDIwOCxcbiAgICAgIDExMixcbiAgICAgIDEzNyxcbiAgICAgIDIzMCxcbiAgICAgIDExMyxcbiAgICAgIDE4MixcbiAgICAgIDE1OSxcbiAgICAgIDg5LFxuICAgICAgMTc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMTA5LFxuICAgICAgNDAsXG4gICAgICA0MCxcbiAgICAgIDE1MixcbiAgICAgIDg2LFxuICAgICAgMTcwLFxuICAgICAgMTcyLFxuICAgICAgMjI5LFxuICAgICAgMjE5LFxuICAgICAgOTksXG4gICAgICAyNDcsXG4gICAgICA0OSxcbiAgICAgIDQ0LFxuICAgICAgMjU1LFxuICAgICAgOCxcbiAgICAgIDg2LFxuICAgICAgMTAxLFxuICAgICAgOCxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5U1ZITDFITlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjExNjcxNzI6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZe28J2XulxcblxcblxcblxcblxcbvCdl6ZcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wnZebXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxu8J2XlFxcblxcblxcblxcblxcblxcblxcblxcblxcbvCdl59cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG7wnZecXFxuXFxuXFxuXFxu8J2XpvCdl5vwnZeU8J2Xn/Cdl5xcIixcbiAgICBcImxpZFwiOiBcIjE4Njc2NzEzOTQyNjM5NDo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdXBoT01HRU5lVXZiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFxL01CYVU4WEJXU0JLeG9RQ2crZjFWRmdhbURhR0twUnE5d2M5Nk9DaFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidnNtMTZiT0JLa0Y3cFBDUzNWZll4c1o0dDFtZVdkOVdEYlR3YjY5VGdKSGgwSGwxSTd2SjBaUWZlZk1ENzA4S1paclFTQWxjT3VBbXRDMnVUanBtQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTVE2am1GTWx4NzN0RFFTeEtTZWZkTEhZM1FpNW1rTHJ4cHo5RldzL2tUaVE4UVE0UnlTclZRYnFwOVZzZm1GMmU0aS94anZYWWJpRDBYTWtvWG5XQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjExNjcxNzI6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2NjY3MTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
