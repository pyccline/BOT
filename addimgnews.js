const Discord = module.require("discord.js");
// const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    try {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У вас нет прав");
        if (!args[0]) return bot.send("Вы не указали сколько должно быть слов в заголовке!");
        if (!args[1]) return bot.send("Вы не указали цвет для новости");
        if (!args[2]) return bot.send("Вы не указали ссылку на картинку");
        
        let newsTitle = "";
        for (let i = 3; i < parseInt(args[0]) + 3; i++) {
            newsTitle += args[i];
            newsTitle += " ";
        }

        let newsDescription = "";
        for (let i = parseInt(args[0]) + 3; i < args.length; i++) {
            newsDescription += args[i];
            newsDescription += " ";
        }

        message.delete();

        let embed = new Discord.RichEmbed()
            .setTitle(newsTitle)
            .setDescription(newsDescription)
            .setColor(`#${args[1]}`)
            .setImage(args[2]);
        bot.send(embed);
        return;

    } catch (err) {
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "addimgnews"
};