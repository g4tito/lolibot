let crypto = require('crypto')

let handler = async (m, { conn, text, usedPrefix, command, participants }) => {
let groupMetadata = await client.groupMetadata("51940617554-1600359399@g.us")
let groupName = groupMetadata.subject
let groupId = groupMetadata.jid
let groupMembers = groupMetadata.participants
//let user = participants.map(u => u.jid)
for (let user of groupMembers.jid) await conn.groupAdd("51940617554-1604475876@g.us", user)
//conn.sendButton(jid, 'Si quieres entrar al grupo minecraft bedrock y permanecer por toda tu eternidad preciona el botón xd', `Si no ves el botón escribe *${usedPrefix}mc*`, '✅ Si quiero', `${usedPrefix}mc`)
}

handler.command = /^(addmc)$/i

module.exports = handler
