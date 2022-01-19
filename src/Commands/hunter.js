const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");




module.exports = new Command({
    name:"caçador",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
           
          const exampleEmbed7 = new MessageEmbed()
          .setColor('#000')
          .addField('\u200B', "**Caçador** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["hunter_first_place"]) exampleEmbed7.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["hunter_first_place"])
          else{
            exampleEmbed7.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["hunter_second_place"]) exampleEmbed7.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["hunter_second_place"])
          else{
            exampleEmbed7.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["hunter_third_place"]) exampleEmbed7.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["hunter_third_place"])
          else{
            exampleEmbed7.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["hunter_points"]) exampleEmbed7.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["hunter_points"])
          else{
            exampleEmbed7.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["hunter_played"]) exampleEmbed7.addField(`\u200B`, "**Jogou Caçador: " + response.data.response.stats.party["hunter_played"] + " vezes**")
          else{
            exampleEmbed7.addField('\u200B' , "**Jogou Caçador: 0 vezes**")
          };
        message.reply({embeds : [exampleEmbed7]});
             
              
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})