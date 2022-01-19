const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");




module.exports = new Command({
    name:"corridamortal",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
           
          const exampleEmbed4 = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addField('\u200B', "**Corrida Mortal** ")
          if (response.data.response.stats.party["race_first_place"]) exampleEmbed4.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["race_first_place"])
          else{
            exampleEmbed4.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["race_second_place"]) exampleEmbed4.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["race_second_place"])
          else{
            exampleEmbed4.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["race_third_place"]) exampleEmbed4.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["race_third_place"])
          else{
            exampleEmbed4.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["race_points"]) exampleEmbed4.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["race_points"])
          else{
            exampleEmbed4.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["race_played"]) exampleEmbed4.addField(`\u200B`, "**Jogou Corrida Mortal: " + response.data.response.stats.party["race_played"] + " vezes**")
          else{
            exampleEmbed4.addField('\u200B' , "**Jogou Corrida Mortal: 0 vezes**")
          };
          
          
        message.reply({embeds : [exampleEmbed4]});
             
              
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})