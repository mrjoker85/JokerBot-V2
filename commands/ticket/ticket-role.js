const { DiscordTicket } = require(`discord_ticket_maker`)
const ticket = new DiscordTicket()

module.exports = {
    name: "ticket-role",
    description: "set Support Role",
    run: async (client, mesasage, args) => {
        const role = message.mentions.roles.first()
        ticket.setRole(message, role)
    }
}