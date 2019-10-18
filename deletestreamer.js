const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У вас нет прав");

    for (let i = 0; i < 100; i++) {
        if (bot.streamers[i]) {
            if (bot.streamers[i].streamerName == args[0]) {
                delete bot.streamers[i];
                fs.writeFile('./streamers.json',JSON.stringify(bot.streamers),(err)=>{
                    if(err) console.log(err);
                });
                bot.send(`${args[0]} был удален из списка стримеров!`);
                break;
            }
        }
    }
};
module.exports.help = {
    name: "deletestreamer"
};