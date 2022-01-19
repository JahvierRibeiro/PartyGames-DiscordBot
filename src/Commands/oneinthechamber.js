const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");




module.exports = new Command({
    name:"oneinthechamber",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
           
          const exampleEmbed11 = new MessageEmbed()
          .setColor('#000')
          .addField('\u200B', "**One in the chamber** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["oitc_first_place"]) exampleEmbed11.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["oitc_first_place"])
          else{
            exampleEmbed11.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["oitc_second_place"]) exampleEmbed11.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["oitc_second_place"])
          else{
            exampleEmbed11.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["oitc_third_place"]) exampleEmbed11.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["oitc_third_place"])
          else{
            exampleEmbed11.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["oitc_points"]) exampleEmbed11.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["oitc_points"])
          else{
            exampleEmbed11.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["oitc_played"]) exampleEmbed11.addField(`\u200B`, "**Jogou One in the chamber: " + response.data.response.stats.party["oitc_played"] + " vezes**")
          else{
            exampleEmbed11.addField('\u200B' , "**Jogou One in the chamber: 0 vezes**")
          };
          
        message.reply({embeds : [exampleEmbed11]});
             
              
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})