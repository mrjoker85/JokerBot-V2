module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    run : async(client, message, args) => {
        const target = message.mentions.users.first();
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":false: Permission Nadari")
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`);
        }
    }
}
