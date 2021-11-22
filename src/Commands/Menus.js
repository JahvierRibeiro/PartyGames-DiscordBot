const Command = require("../Structures/Command");

const Discord = require("discord.js");
const { pagination } = require("reconlx");

module.exports = new Command({
    name: "menu",
    description: "Todos os comandos do bot",

    async run(message,args,client){
        

        const embed1 = new Discord.MessageEmbed().setTitle("text 1").setFooter("test1");
        const embed2 = new Discord.MessageEmbed().setTitle("text 2").setFooter("test2");

        const embeds = [embed1,embed2]
        pagination({

            embeds: embeds,
            message : message,
            channel: message.channel,
            author: message.author,
            max: 10000,
            

        })
    }
})