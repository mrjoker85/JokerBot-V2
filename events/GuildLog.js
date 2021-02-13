const client = require(`../index`)
const Discord = require(`discord.js`)
const LogChannel = `803921495322787841`

client.on(`guildCreate`, (Guild) =>{
    const Embed = new Discord.MessageEmbed()
        .setTitle(`Server Jadid!`)
        .addField(`Etelaat Server`, `${Guild.name} (${Guild.id})`)
        .addField(`Etelaat Owner`, `${Guild.owner} (${Guild.ownerid})`)
        .addField(`Tedad Member`, `**${Guild.memberCount}**`)
        .setFooter(`Dar Hale Hazer Man Dar ${client.guilds.cache.size} Server Hastam`)
        .setTimestamp()
        .setThumbnail(Guild.iconURL({ dynamic: true}))
        .setColor(`GREEN`)
        client.channels.cache.get(LogChannel).send(Embed)

})
client.on(`guildDelete`, (Guild) =>{
    const Embed = new Discord.MessageEmbed()
        .setTitle(`Man Az Server Hazf Shodam`)
        .addField(`Etelaat Server`, `${Guild.name} (${Guild.id})`)
        .addField(`Etelaat Owner`, `${Guild.owner} (${Guild.ownerid})`)
        .setFooter(`Dar Hale Hazer Man Dar ${client.guilds.cache.size} Server Hastam`)
        .setThumbnail(Guild.iconURL({ dynamic: true}))
        .setTimestamp()
        .setColor(`RED`)
        client.channels.cache.get(LogChannel).send(Embed)
})

