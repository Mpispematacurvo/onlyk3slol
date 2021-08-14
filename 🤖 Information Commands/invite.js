const Discord = require("discord.js")
const config = require("../../config.json")
module.exports = {
    name: "invite",
	aliases: ["add"],
    category: "🤖 Information Commands",
    description: "Invite the Bot to your Server",
    usage: "invite",
    run: async (client, message, args) => {
        let inviteembed = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setTitle("Invite BOTS")
        .setDescription(`[INVITE ME NOW, thanks](https://discord.com/api/oauth2/authorize?client_id=871043192957599755&permissions=8&scope=bot%20applications.commands)
        
        [<:musicium:775854849970798632> INVITE MUSICIUM](https://dc.musicium.eu)`)
        .setFooter(client.user.username, config.AVATARURL)
        
        message.reply(inviteembed);
    }
}
