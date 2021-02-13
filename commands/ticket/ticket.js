const { DiscordTicket } = require(`discord_ticket_maker`)
const ticket = new DiscordTicket()

module.exports = {
    name: "ticket",
    description: "make a Support Ticket",
    run: async (client, message, args) => {
        const reason = args.join(" ")

        ticket.makeTicket(message, reason)
    }
}
