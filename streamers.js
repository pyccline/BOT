const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    let streamersList = "";
    for (let i = 0; i < 100; i++) {
        if (!bot.streamers[i]) {
            continue;
        }
        streamersList += bot.streamers[i].streamerName;
        streamersList += "\n";
    };

    let embed = new Discord.RichEmbed()
        .setTitle("Список стримеров")
        .setDescription(streamersList)
        .setColor(`#8000ff`);
    bot.send(embed);
    return;
}

module.exports.help = {
    name: "streamers"
};