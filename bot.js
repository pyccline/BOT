const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();


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
}
client2.on("message", message=>{
    if(commandIs("username", message))
    {

        console.log(msc)
        client2.user.setUsername(msc)
message.delete()
    }
if(commandIs("wk", message))
    {
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

       client2.user.setAvatar(message.attachments.map(g=>g.url).toString())  
  message.delete()
    }
if(commandIs("prefix", message))
    {

      client.guilds.get("351491707554103296").members.get("527916412514074624").setNickname(message.content.split("prefix ")[1])
  message.delete()
    }
    if(commandIs("stream",message))
    {
 
   console.log(message.content.split(".stream ")[1])
         client.channels.get("528212908849496064").fetchMessage("579670100014137354").then(g=>{
             g.edit(message.content.split(".stream ")[1] + "thumb "+ message.attachments.map(g=>g.url).toString())
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


        client.channels.get("528212908849496064").fetchMessage("579663452822437905").then(g=>{
            g.edit(message.content.split("new ")[1] + "thumb "+ message.attachments.map(g=>g.url).toString())
message.delete()
        })
      
    }
    if(message.channel.id == "579293533995794444")
    {
        client.channels.get("528212908849496064").fetchMessage("579670100014137354").then(g=>{
            
            var title = g.content.split("title  ")[1].split(";")[0]
            var desc = g.content.split("desc ")[1].split(";")[0]
            var thumb = g.content.split("thumb ")[1]
        var uses = client2.users.size
        var usees = client2.users.map(g=>g.id)
       for(i=0;i<uses;i++)
{
    var embed = new Discord.RichEmbed()
    .setColor("#9932CC")
    .setTitle(title)
    .setDescription(desc)//"HØUST8N\nНачал трансляцию\n[Перейти](https://www.twitch.tv/h0ust8n)")
    .setThumbnail(thumb)//"https://cdn.discordapp.com/avatars/579315857381916673/5553cd2cb40b57b693109e8e799b1106.png?size=128")
    client2.users.get(usees[i]).send(embed)
}
 })
    }
})

   
 
client2.on("guildMemberAdd", f=>{
    client.channels.get("528212908849496064").fetchMessage("579670100014137354").then(g=>{
            
        var title = g.content.split("title  ")[1].split(";")[0]
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
