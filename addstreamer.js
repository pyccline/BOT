const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У вас нет прав");
    for (let i = 0; i < 100; i++) {
        if (!bot.streamers[i]) continue;
        if (bot.streamers[i].streamerName == `${args[0]}`) {
            return message.channel.send("Такой стример уже есть в списке!");
        }
    }
    if (!args[1]) return message.channel.send("Введите URL картинки лого");

    for (let i = 0; i < 100; i++) {
        if (bot.streamers[i]) {
            continue;
        }
        bot.streamers[i] = {
            streamerName: args[0],
            streamerLogo: args[1],
            isStreaming: false,
            isStreamingButNotInitialized: false,
        };

        fs.writeFile('./streamers.json', JSON.stringify(bot.streamers), (err) => {
            if (err) console.log(err);
        });

        bot.send(`${args[0]} был добавлен в список стримеров`)
        return;
    }
};
module.exports.help = {
    name: "addstreamer"
};