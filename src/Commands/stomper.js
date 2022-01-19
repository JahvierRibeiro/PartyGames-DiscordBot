const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");




module.exports = new Command({
    name:"stomper",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
           
          const exampleEmbed12 = new MessageEmbed()
          .setColor('#000')
          .addField('\u200B', "**Stomper** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["stomper_first_place"]) exampleEmbed12.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["stomper_first_place"])
          else{
            exampleEmbed12.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["stomper_second_place"]) exampleEmbed12.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["stomper_second_place"])
          else{
            exampleEmbed12.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["stomper_third_place"]) exampleEmbed12.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["stomper_third_place"])
          else{
            exampleEmbed12.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["stomper_points"]) exampleEmbed12.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["stomper_points"])
          else{
            exampleEmbed12.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["stomper_played"]) exampleEmbed12.addField(`\u200B`, "**Jogou Stomper: " + response.data.response.stats.party["stomper_played"] + " vezes**")
          else{
            exampleEmbed12.addField('\u200B' , "**Jogou Stomper: 0 vezes**")
          }
          
        message.reply({embeds : [exampleEmbed12]});
             
              
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})