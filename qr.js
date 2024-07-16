const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Brasho_Kish,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function LEGACY_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Brasho_Kish = Brasho_Kish({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Brasho_Kish.ev.on('creds.update', saveCreds)
			Qr_Code_By_Brasho_Kishr.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Brasho_Kish.sendMessage(Qr_Code_By_Brasho_Kish.user.id, { text: 'BLADE-MD;;;' + b64data });
	
				   let LEGACY_MD_TEXT = `
*hello*
*from*
*ALEX TV*
______________________________
╔════◇
║『 𝐘𝐎𝐔'𝐕𝐄 𝐂𝐇𝐎𝐒𝐄𝐍 *BLADE* 𝐌𝐃 』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚══════════════╝
╔═════◇
║ 『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║
║❍ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/2348059540212_
║❍ 𝐑𝐞𝐩𝐨: _https://github.com/Bladeh4x/BLADE-MD_
║❍ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/DLniUfYVWR50sbkZDR8tBI_
║❍ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VafHAVpICVfdEERr6h2f_
║_
║ 
╚══════════════╝ 
  *BLADE* 𝐌𝐃
______________________________

Don't Forget To Give Star⭐ To My Repo`
	 await Qr_Code_By_Brasho_Kish.sendMessage(Qr_Code_By_Brasho_Kish.user.id,{text:LEGACY_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Brasho_Kish.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					LEGACY_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await LEGACY_MD_QR_CODE()
});
module.exports = router
