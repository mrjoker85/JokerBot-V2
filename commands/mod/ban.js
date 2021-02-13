module.exports = {
    name: 'ban',
    description: "This command kicks a member!",
    run : async(client, message, args) => {
        const target = message.mentions.users.first();
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`:face1: Permission Nadari`)
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been Banned");
        }else{
            message.channel.send(`You coudn't Ban that member!`);
        }
    }
}
