let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [6285732195087]
│ • Gopay [6285707645429]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285732195087
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
