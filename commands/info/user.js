const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: `user`,
    description: "Namayesh Avatar Server",   
    run : async(client, message, args)=>{   
        let userinfoembed = new Discord.MessageEmbed()
        let userMention = message.mentions.users.first()
    if(userMention){
        userinfoembed.setColor('RANDOM')
        userinfoembed.setAuthor(`User Info`)
        userinfoembed.setThumbnail(userMention.displayAvatarURL({format: "gif", dynamic: true, size: 1024}))
        userinfoembed.setThumbnail(userMention.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        userinfoembed.addField("User Name", `${userMention.username}`, true)
        userinfoembed.addField("Tag", `${userMention.discriminator}`, true)
        userinfoembed.addField("ID", `${userMention.id}`, true)
        userinfoembed.setTimestamp()
        userinfoembed.setFooter(`${userMention.username}`, `${userMention.displayAvatarURL()}`);
         message.channel.send(userinfoembed);
    }else{
        userinfoembed.setColor('RANDOM')
        userinfoembed.setAuthor(`User Info`)
        userinfoembed.setThumbnail(message.author.displayAvatarURL({format: "gif", dynamic: true, size: 1024}))
        userinfoembed.setThumbnail(message.author.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        userinfoembed.addField("User Name", `${message.author.username}`, true)
        userinfoembed.addField("Tag", `${message.author.discriminator}`, true)
        userinfoembed.addField("ID", `${message.author.id}`, true)
        userinfoembed.setTimestamp()
        userinfoembed.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`);
         message.channel.send(userinfoembed);
    }
}}