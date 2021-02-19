const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

//Global queue for your bot. Every server will have a key and value pair in this map. { guild.id, queue_constructor{} }
const queue = new Map();
const server_queue = queue.get(message.guild.id);
const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    //If no song is left in the server queue. Leave the voice channel and delete the key and value pair from the global queue.
    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    await song_queue.text_channel.send(`🎶 Now playing **${song.title}**`)
}

const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    if(!server_queue){
        return message.channel.send(`There are no songs in queue 😔`);
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command!');
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
        }
module.exports = {
    name: 'stop',
    aliases: ['skip', 'stop'], //We are using aliases to run the skip and stop command follow this tutorial if lost: https://www.youtube.com/watch?v=QBUJ3cdofqc
    cooldown: 0,
    description: 'Advanced music bot',
    run : async(client, message, args) => {
        stop_song(message, server_queue);
    }
}
