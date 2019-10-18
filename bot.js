const Discord = require('discord.js');
const bot = new Discord.Client();
const a = require('axios');
const fs = require('fs');
let twitchAPI = require('twitch-api-v5');
let config = require('./botconfig.json');
bot.commands = new Discord.Collection();
bot.streamers = require('./streamers.json');

let botToken = config.botToken;
let twitchApiToken = config.twitchApiToken;
let twitchChannelName = config.twitchChannelName;
let prefix = config.prefix;

let streamChecker;
let isCheckerStarted = false;
let isStreaming = false;
let isStreamingButNotInitialized = false;

fs.readdir('./cmds/', (err, files) => {
    if (err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) console.log("Commands not found! Bot will just start");
    console.log(`Loaded ${jsfiles.length} commands`);
    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}. ${f} loaded`);
        bot.commands.set(props.help.name, props);
    });
});


bot.on('ready', () => {
    console.log(`Bot '${bot.user.username}' was started`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(`Bot invite link (use this link if you want add bot to your server): ${link}`);
    });
});


bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Здравствуй!`)
    .setDescription(`\`\`\`diff\n- ${member.user.username}, приветствую тебя\n- на сервере BLA BLA BLA\`\`\`\n` + 
                    `\"bla bla bla\" - это крутой сервер, отвечаю\nВсе наши учатники - адекватные и взрослые люди\n` +
                    `\`\`\`fix\n• Строгие админы\n• Классные девчонки\n• Крутые пацаны\n• Классные конкурсы\`\`\`\n` +
                    `Если хочешь стать таким же классным, то ты обязательно должен читать книги\n` +
                    `\`\`\`xl\n• Welcome to the club buddy!\`\`\`\n`)
    .setColor(`#6A5ACD`)
    .setImage(`https://sun9-3.userapi.com/c850724/v850724611/1e1ded/04wSjPG3AYY.jpg`)
    .setFooter(`(c) j1xis dev`, "https://www.kaluga-poisk.ru/system/Cover/images/000/121/755/logo/objects_23183_1550672659.jpg");
    member.send(embed);
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    bot.send = function (msg) {
        message.channel.send(msg);
    };

    if (!isCheckerStarted) {
        isCheckerStarted = true;
        streamChecker = setInterval(() => checkIfSteaming(message), 60000);
    }

    if (!message.content.startsWith(prefix)) return;


    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    let cmd = bot.commands.get(command.slice(prefix.length));

    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
    if (cmd) cmd.run(bot, message, args);
});
bot.login(botToken);


async function checkIfSteaming(helper) {
    for (let i = 0; i < 100; i++) {
        if (!bot.streamers[i]) {
            continue;
        }

        console.log(`StreamCheck: ${bot.streamers[i].streamerName}`);
        const r = await a.get(`https://api.twitch.tv/helix/streams?user_login=${bot.streamers[i].streamerName}`, {
            headers: {
                "Client-ID": twitchApiToken
            }
        }).then((res) => {
            console.log(res.data);
            return res.data;
        });
        if (r.data && r.data[0]) {
            try {
                if (bot.streamers[i].isStreamingButNotInitialized) {
                    bot.streamers[i].isStreamingButNotInitialized = false;
                    playing = r.data[0].title;
                    duration = r.data[0].started_at;
                    peakViewers = r.data[0].viewer_count;
                    viewers = r.data[0].viewer_count;
                    game = await a.get(`https://api.twitch.tv/helix/games?id=${r.data[0].game_id}`, {
                        headers: {
                            "Client-ID": twitchApiToken
                        }
                    }).then((r) => { return r.data.data[0].name });
                }
                else if (bot.streamers[i].isStreaming) {
                    console.log(`Streaming: ${bot.streamers[i].streamerName}`);
                }
                else {
                    console.log(`Now live: ${bot.streamers[i].streamerName}`);
                    bot.streamers[i].isStreaming = true;
                    bot.streamers[i].isStreamingButNotInitialized = true;

                    helper.guild.members.forEach(member => {
                        if (member.id != bot.user.id && !member.user.bot) {
                            let embed = new Discord.RichEmbed()
                                .setTitle(`${bot.streamers[i].streamerName} запустил стрим`)
                                .setColor('#8000ff')
                                .setDescription(`Название: ${r.data[0].title}\nЗрителей: ${r.data[0].viewer_count}\nhttps://twitch.tv/${bot.streamers[i].streamerName}`)
                                .setImage(bot.streamers[i].streamerLogo);
                            member.send(embed);
                        }
                    });
                }
            }
            catch (e) {
                console.log("Could not send message:" + e);
            }

        }
        else {
            if (bot.streamers[i].isStreaming) {
                console.log(`Stopped streaming: ${bot.streamers[i].streamerName}`);
                bot.streamers[i].isStreaming = false;
            }
        }
    }
}