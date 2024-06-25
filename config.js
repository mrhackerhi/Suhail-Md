const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://duffiariel242:<password>@suhail.uea2wzh.mongodb.net/?retryWrites=true&w=majority&appName=suhail"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22595566900";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_48_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICA5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzLFxuICAgICAgICA1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNixcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidFJWMmpHOHVuVE5Qc3VpTGpjZzlLUEw1RHcvRWpWRVJFOUdOMUN0enhIWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZGoxUmxCT2FUamlacHo2STFrSU1xQVwiLFxuICBcInBob25lSWRcIjogXCJhNThhNTA4Zi1kNGU0LTQ5ZmMtYjE2OC1hMzI4Y2U1MjA1OTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTM2LFxuICAgICAgOTgsXG4gICAgICAxMDIsXG4gICAgICAyMTIsXG4gICAgICAxNzYsXG4gICAgICAyLFxuICAgICAgMTA1LFxuICAgICAgNjIsXG4gICAgICA2OSxcbiAgICAgIDE1OSxcbiAgICAgIDE0MixcbiAgICAgIDE5NixcbiAgICAgIDE1MSxcbiAgICAgIDg3LFxuICAgICAgMjE2LFxuICAgICAgNDMsXG4gICAgICAyMjQsXG4gICAgICA0NSxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICA2OCxcbiAgICAgIDgyLFxuICAgICAgOSxcbiAgICAgIDEzNyxcbiAgICAgIDQyLFxuICAgICAgODksXG4gICAgICAxNDIsXG4gICAgICA3MyxcbiAgICAgIDE3NSxcbiAgICAgIDIzNyxcbiAgICAgIDIyOCxcbiAgICAgIDI1NSxcbiAgICAgIDIyMSxcbiAgICAgIDIzNCxcbiAgICAgIDEzOSxcbiAgICAgIDM1LFxuICAgICAgMjI1LFxuICAgICAgMTE4LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkxNDFXNE0yXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDM5OTU1NzAwMDc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjM0MTI3NDc1MzkyNjc0OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTC9zaFgwUXEvbnFzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0b3JqblRzdkFYRnYyeG5SQjltKzJ3NWVEWC8wWWRtMzBkM3VWOXJwQWxNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkd1VU0xZ2VXOHlZU1hzYXMyVEdMUFR4Ly9JK3lUSXBscW5majFpZXpLSzZ3d3lkdHRpRWcxckw2UTRWWDhZaGpqLzA2U3hlSzNVaVFIZjNRWjRTVkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9YY1RxLzVMVkVsS3pjSk1hVVczWXJrb2VKME5oMW1oVkZxMFdzb1RFNVQ1MWI0WWEwMU9HQmwzeFpUeng2cks4dGJLT1JnZXJsQzQ2SCtnbWhuMmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0Mzk5NTU3MDAwNzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzE5NzI5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝑴𝑰𝑲𝑼-𝑵𝒀 𝑯𝑨𝑫𝑬𝑺 𝟐𝟏🖤🖤",
  packname: process.env.PACK_NAME || "~M~J💓",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-4188ffd9-da6f-42d8-a1f9-e09970b07fef",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "gazon  syntaxe",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
