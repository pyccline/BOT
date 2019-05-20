const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();


var fs = require("fs");
var msc
var pr
function commandIs(str, msg){
pr = client.guilds.get("351491707554103296").members.get("527916412514074624").nickname
console.log(pr + str)

msc = msg.content.split(str+" ")[1]
return msg.content.toLowerCase().startsWith(pr + str)
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}//g
client3.on("message", message=>{
   
    if(commandIs("username", message))
    {
        if(message.member.id !="352826046661263381") return;
        console.log(msc)
        client3.user.setUsername(msc)
message.delete()
    }
if(commandIs("wk", message))
    {
         if(message.member.id !="352826046661263381") return;
client2.channels.get("528212908849496064").fetchMessage("580026035169394688").then(g=>{
             g.edit(message.content.split("wk ")[1] + "thumb "+ message.attachments.map(g=>g.url).toString())
message.delete()
         })

}
if(commandIs("vk", message))
    {

message.delete()
client.channels.get("528212908849496064").fetchMessage("580026035169394688").then(g=>{
var title = g.content.split("title ")[1].split(";")[0]
        var desc = g.content.split("desc ")[1].split(";")[0]
        var thumb = g.content.split("thumb ")[1]
        
    var embed = new Discord.RichEmbed()
    .setColor("#9932CC")
    .setTitle(title)
    .setDescription(desc)//"<@"+f.id+">, приветствую тебя на сервере **"+f.guild.name+"**!\n\n**"+f.guild.name+"** - это закрытый сервер.\nВсе наши участники - адекватные и взрослые люди.\n\n**_Строгая и справедливая администрация\nЖивое и приятное общение\nИнсайдерская информация\nТрансляция магазина Королевской битвы\nОповещения о легендарных PvE миссиях\nУникальная система званий\nЕженедельные топы и конкурсы\nАвторский бот для максимальной автоматизации и удобства_**\n\n          **Добро пожаловать!**")
    
    .setFooter("DØNUT", "https://triche-generateur.fr/wp-content/uploads/2018/10/unnamed.jpg")
    .setThumbnail(thumb)
    message.channel.send(embed)
})
}
    if(commandIs("avatar", message))
    {
 if(message.member.id !="352826046661263381") return;
       client3.user.setAvatar(message.attachments.map(g=>g.url).toString())  
  message.delete()
    }
if(commandIs("prefix", message))
    {
        if(message.member.id !="352826046661263381") return;
      client.guilds.get("351491707554103296").members.get("527916412514074624").setNickname(message.content.split("prefix ")[1])
  message.delete()
    }
    if(commandIs("stream",message))
    {
 
        if(message.member.id !="352826046661263381") return;
         client.channels.get("528212908849496064").fetchMessage("579670100014137354").then(g=>{
             g.edit(message.content.split("stream ")[1] + "thumb "+ message.attachments.map(g=>g.url).toString())
message.delete()
         })
    }
    if(commandIs("srt", message))
    {
console.log(1)
message.delete()
        client.channels.get("528212908849496064").fetchMessage("579670100014137354").then(g=>{
       
            var title = g.content.split("title")[1].split(";")[0]
            var desc = g.content.split("desc")[1].split(";")[0]
            var thumb = g.content.split("thumb")[1].split(";")[0]
            var embed = new Discord.RichEmbed()
            .setColor("#9932CC")
            .setTitle(title)
            .setDescription(desc)//"HØUST8N\nНачал трансляцию\n[Перейти](https://www.twitch.tv/h0ust8n)")
            .setThumbnail(thumb)//"https://cdn.discordapp.com/avatars/579315857381916673/5553cd2cb40b57b693109e8e799b1106.png?size=128")
           message.channel.send(embed)
        })
    }
    
    if(commandIs("new",message))
    {
        if(message.member.id !="352826046661263381") return;

        client.channels.get("528212908849496064").fetchMessage("579663452822437905").then(g=>{
            g.edit(message.content.split("new ")[1] + "thumb "+ message.attachments.map(g=>g.url).toString())
message.delete()
        })
      
    }
    if(message.channel.id == "579293533995794444")
    {
        client.channels.get("528212908849496064").fetchMessage("579670100014137354").then(g=>{
            
            var title = g.content.split("title ")[1].split(";")[0]
            var desc = g.content.split("desc ")[1].split(";")[0]
            var thumb = g.content.split("thumb ")[1]
        var uses = client3.users.size
        var usees = client3.users.map(g=>g.id)
       for(i=0;i<uses;i++)
{
    var embed = new Discord.RichEmbed()
    .setColor("#9932CC")
    .setTitle(title)
    .setDescription(desc)//"HØUST8N\nНачал трансляцию\n[Перейти](https://www.twitch.tv/h0ust8n)")
    .setThumbnail(thumb)//"https://cdn.discordapp.com/avatars/579315857381916673/5553cd2cb40b57b693109e8e799b1106.png?size=128")
    client3.users.get(usees[i]).send(embed)
}
 })
    }
})

   
 
client3.on("guildMemberAdd", f=>{
    client.channels.get("528212908849496064").fetchMessage("579663452822437905").then(g=>{
            
        var title = g.content.split("title ")[1].split(";")[0]
        var desc = g.content.split("desc ")[1].split(";")[0].replace("[ник]","<@"+f.id+">").replace("[сервер]", f.guild.name)
        var thumb = g.content.split("thumb ")[1]
        
    var embed = new Discord.RichEmbed()
    .setColor("#9932CC")
    .setTitle(title)
    .setDescription(desc)//"<@"+f.id+">, приветствую тебя на сервере **"+f.guild.name+"**!\n\n**"+f.guild.name+"** - это закрытый сервер.\nВсе наши участники - адекватные и взрослые люди.\n\n**_Строгая и справедливая администрация\nЖивое и приятное общение\nИнсайдерская информация\nТрансляция магазина Королевской битвы\nОповещения о легендарных PvE миссиях\nУникальная система званий\nЕженедельные топы и конкурсы\nАвторский бот для максимальной автоматизации и удобства_**\n\n          **Добро пожаловать!**")
    .setImage(thumb)
    .setFooter("DØNUT", "https://triche-generateur.fr/wp-content/uploads/2018/10/unnamed.jpg")
    .setThumbnail(f.guild.iconURL)
    f.send(embed)

    })
})


client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);