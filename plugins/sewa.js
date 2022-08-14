let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
›› *OPEN SEWA BOT「 𝚒𝚢𝚊𝚗 - MD BOTZ OFFICIAL  ל 」*

╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _5K/grup ( 1 minggu )_
┊⫹⫺ *Normal:* _10k/grup (1 bulan)_
┊⫹⫺ *Permanen?*: 20k
┊⫹⫺ Jadi Bot+Owner?:*_35K permanent_*
╰═┅═━––––––๑

╭━━━━「 *FITUR* 」
┊⫹⫺ Antilink On/Off
┊⫹⫺ Welcome pdf / apk / text dll
┊⫹⫺ Stiker 
┊⫹⫺ jual sc no pasaran 
┊⫹⫺ PlayMusik/Audio     
┊⫹⫺ Quetes Menu
┊⫹⫺ Download Menu
┊⫹⫺ Anime Menu
┊⫹⫺ Nsfw Menu / 18+
┊⫹⫺ RPG / Game Menu
┊⫹⫺ BOT 24 JAM
┊⫹⫺ FAST RESPON
╰═┅═━––––––๑

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah

🗣️: On 24 Jam Kak?/Fast Respon?
💬: Iyaa Dong... Soalnya Bukan Menggunakan Termux :D

CEK FITUR BOT!!
https://mez.ink/botwhatsapp

Kontak Owner!!
https://wa.me/qr/RRWHKPB33NFNM1

▌│█║▌║▌║║▌║▌║█│▌

⫹⫺  *𝚒𝚢𝚊𝚗 - MD*
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🧸 YouTube 🧸', url: snh}},
    {index: 2, urlButton: {displayText: '💬 Instagram 💬', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group 🌎', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['iklan']
handler.tags = ['info']
handler.command = /^(iklan)$/i

export default handler
