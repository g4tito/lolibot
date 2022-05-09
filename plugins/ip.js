let { MessageType } = require("@adiwajshing/baileys")
let axios = require("axios");
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

if (!text) return conn.reply(m.chat, 'Masukan Alamat IP yang akan dicek', m)
let ip = await (await fetch(`http://ip-api.com/json/${text}`)).json()
if(ip.status == 'fail') return reply('*ip incorrecta*')
let iptext = `\t\t\t\t*‧ 🖥️ Información IP 🖥️ ‧*

🔍 *Ip:* ${ip.lat}

        *Latitud de ip:* ${ip.lat}
        *Longitud de ip:* ${ip.lon}

🌆 *País:* ${ip.country}
        *Código de país:* ${ip.countryCode}

🏡 *Región:* ${ip.region}
        *Nombre de región:* ${ip.regionName}

🏙️ *Ciudad:* ${ip.city}

📚 *Código postal:* ${ip.zip}

🕐 *Zona horaria:* ${ip.timezone}

🌐 *Proveedor de servicios de Internet:*
${ip.isp}

🕋 *Organización:* ${ip.org}`
conn.reply(m.chat, iptext, m)
    
}
handler.help = ['ip']
handler.tags = ['tools']
handler.command = /^(ip)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
