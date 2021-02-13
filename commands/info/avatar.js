const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: `avatar`,
    description: "Namayesh Avatar Server",
    run : async(client, message, args)=>{
        let userinfoembed = new Discord.MessageEmbed()
        let userMention = message.mentions.users.first()
        if(userMention){
        userinfoembed.setColor('RANDOM')
        userinfoembed.setAuthor(`Avatar Fard Mored Nazar`)
        userinfoembed.setImage(userMention.displayAvatarURL({format: "gif", dynamic: true, size: 1024}))
        userinfoembed.setImage(userMention.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        userinfoembed.setTimestamp()
        userinfoembed.setFooter(`${userMention.username}`, `${userMention.displayAvatarURL()}`);
         message.channel.send(userinfoembed);
        }else{
        userinfoembed.setColor('RANDOM')
        userinfoembed.setAuthor(`Avatar Shoma`)
        userinfoembed.setImage(message.author.displayAvatarURL({format: "gif", dynamic: true, size: 1024}))
        userinfoembed.setImage(message.author.displayAvatarURL({format: "png", dynamic: true, size: 1024}))
        userinfoembed.setTimestamp()
        userinfoembed.setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`);
         message.channel.send(userinfoembed);
    }}}