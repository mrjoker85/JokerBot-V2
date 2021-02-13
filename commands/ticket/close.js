const { Message } = require("discord.js")
const { DiscordTicket } = require(`discord_ticket_maker`)
const ticket = new DiscordTicket()

module.exports = {
    name: "close",
    description: "close ticket",
    run: async (client, mesasage, args) => {
        const channel = message.mentions.channel.first() || message.channel
        ticket.closeTicket(message, channel)
    }
}