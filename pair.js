const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Brasho_Kish,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function LEGACY_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Brasho_Kish = Brasho_Kish({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Ubuntu)", "Chrome (Linux)", "Chrome (MacOs)"]
             });
             if(!Pair_Code_By_Brasho_Kish.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Brasho_Kish.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Brasho_Kish.ev.on('creds.update', saveCreds)
            Pair_Code_By_Brasho_Kish.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Brasho_Kish.sendMessage(Pair_Code_By_Brasho_Kish.user.id, { text: '' + b64data });

               let LEGACY_MD_TEXT = `
*𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝*
*𝐄𝐧𝐣𝐨𝐲*
*By _GEEK_*
______________________________
╔════◇
║『 𝐘𝐎𝐔'𝐕𝐄 𝐂𝐇𝐎𝐒𝐄𝐍 *RICHY* 𝐌𝐃 』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚══════════════╝
╔═════◇
║ 『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║
║❍ 𝐎𝐰𝐧𝐞𝐫: _https://wa.me/237620857930_
║❍ 𝐑𝐞𝐩𝐨: _https://github.com/keithkeizzah/HUNCHO-MD_
║❍ 𝐖𝐚𝐆𝐫𝐨𝐮𝐩: _https://chat.whatsapp.com/FRQiuFWlYJ3Jolx7OACtKo_
║❍ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: _https://whatsapp.com/channel/0029VaWQOHsFSAsv3SD3dJ3a_
║❍ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: _https://www.instagram.com/mc_rubenx_
        > 𝑅𝛪𝐶𝛨𝑌-𝛭𝐷 𝛻1.7.5 𝐿𝛥𝑆𝑇𝛯𝑆𝑇                                                          > 𝛲𝛩𝑊𝛯𝑅𝛯𝐷 𝐵𝑌 𝑅𝛪𝐶𝛨𝑌 𝑇𝛯𝐶𝛨
║ 
╚══════════════╝ 
 *RICHY* 𝐌𝐃
______________________________

Don't Forget To Give Star⭐ To My Repo`

 await Pair_Code_By_Brasho_Kish.sendMessage(Pair_Code_By_Brasho_Kish.user.id,{text:LEGACY_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Brasho_Kish.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    LEGACY_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Currently Unavailable"});
         }
        }
    }
    return await LEGACY_MD_PAIR_CODE()
});
module.exports = router
