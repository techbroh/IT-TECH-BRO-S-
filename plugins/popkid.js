const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "popkid",
    alias: ["pop","popsmenu"],use: '.menu',
    desc: "menu the bot",
    category: "menu",
    react: "📱",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭━━━〔 *✨ ${config.BOT_NAME.toUpperCase()} MENU ✨* 〕━━━╮
┃
┃ ⏱️ *Uptime:* ${runtime(process.uptime())}
┃ ⚙️ *Mode:* ${config.MODE}
┃ ✨ *Prefix:* ${config.PREFIX}
┃ 💾 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┃ 🙍 *User:* ${pushName}
┃ 👨‍💻 *Developer:* Popkid Tech
┃ 🚀 *Version:* 1.0.0
┃
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭─〔 ⬇️ *DOWNLOAD COMMANDS* 〕
│ • .fb       • .insta     • .video
│ • .gdrive   • .twitter   • .tt
│ • .mediafire• .play      • .song
│ • .spotify  • .video4    • .img
│ • .lyrics   • .apk       • .baiscop
│ • .ginisisila
╰────────────────────────╯

╭─〔 🔍 *SEARCH COMMANDS* 〕
│ • .yts      • .yta       • .movie
│ • .romance  • .motivate  • .aivoice
│ • .google   • .weather   • .sticksearch
╰────────────────────────╯

╭─〔 🖌️ *LOGO MAKER* 〕
│ • .3dcomic   • .dragonball • .deadpool
│ • .blackpink • .neonlight  • .cat
│ • .sadgirl   • .pornhub    • .naruto
│ • .thor      • .america    • .eraser
│ • .3dpaper   • .futuristic • .clouds
│ • .sans      • .galaxy     • .leaf
│ • .sunset    • .nigeria    • .devilwings
│ • .hacker    • .boom       • .luxury
│ • .zodiac    • .angelwings • .bulb
│ • .tattoo    • .castle     • .frozen
│ • .paint     • .birthday   • .typography
│ • .bear      • .valorant
╰────────────────────────╯

╭─〔 🤖 *AI COMMANDS* 〕
│ • .gpt       • .ai        • .imagescan
│ • .imagine
╰────────────────────────╯

╭─〔 👑 *OWNER COMMANDS* 〕
│ • .updatecmd • .settings  • .owner
│ • .repo      • .system    • .status
│ • .about     • .block     • .unblock
│ • .shutdown  • .broadcast • .jid
│ • .gjid      • .pair      • .save
│ • .restart
╰────────────────────────╯

╭─〔 👥 *GROUP COMMANDS* 〕
│ • .remove    • .del       • .add
│ • .kick      • .kickall   • .promote
│ • .demote    • .tagall    • .invite
│ • .revoke    • .poll      • .randomship
│ • .newgc     • .mute      • .unmute
│ • .lockgc    • .unlockgc  • .leave
│ • .gname     • .makeadmin • .tagadmins
│ • .gdesc     • .join      • .hidetag
│ • .ginfo
╰────────────────────────╯

╭─〔 ℹ️ *INFO COMMANDS* 〕
│ • .about     • .alive     • .request
│ • .botinfo   • .status    • .ping
│ • .system    • .uptime
╰────────────────────────╯

╭─〔 ⚙️ *BOT SETTINGS* 〕
│ • .repo          • .menu
│ • .update        • .mode
│ • .auto-typing   • .alwaysonline
│ • .auto-recording• .autoreadstatus
│ • .antibad       • .autosticker
│ • .autoreply     • .autoreact
│ • .antilink      • .autoread
╰────────────────────────╯

╭─〔 🔄 *CONVERTER COMMANDS* 〕
│ • .sticker   • .take      • .trt
│ • .tts       • .fancy     • .url
│ • .age       • .convert   • .tiny
│ • .movie     • .terminate • .family
╰────────────────────────╯

╭─〔 🎲 *RANDOM COMMANDS* 〕
│ • .anime     • .couplepp  • .loli
│ • .waifu     • .cosplay   • .neko
│ • .randomanime
╰────────────────────────╯

╭─〔 🖼️ *WALLPAPER COMMANDS* 〕
│ • .img       • .logo      • .ss
╰────────────────────────╯

╭─〔 🧩 *OTHER COMMANDS* 〕
│ • .trt       • .joke      • .fact
│ • .github    • .gpass     • .hack
│ • .vv        • .vv2       • .spam
│ • .vcard     • .srepo     • .system
│ • .rank      • .timezone  • .define
│ • .dailyfact
╰────────────────────────╯

✨ Powered by *POPKID TECH*
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/e6rhto.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363290715861418@newsletter',
                        newsletterName: 'PᴏᴘᴋɪᴅXᴛᴇᴄʜ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/kxdej4.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
