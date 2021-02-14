module.exports = async (client) =>{
    const guild = client.guilds.cache.get(`781845235931152405`)
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(`810448550394855455`)
        channel.setName(`⌠👥⌡𝐔𝐬𝐞𝐫𝐬 :${memberCount.toLocaleString()}`)
    }, 5000)
}
