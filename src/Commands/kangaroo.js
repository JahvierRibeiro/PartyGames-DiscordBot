const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");




module.exports = new Command({
    name:"kangaroo",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
           
          const exampleEmbed8 = new MessageEmbed()
          .setColor('#000')
          .addField('\u200B', "**Kangaroo** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["kangaroo_race_first_place"]) exampleEmbed8.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["kangaroo_race_first_place"])
          else{
            exampleEmbed8.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["kangaroo_race_second_place"]) exampleEmbed8.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["kangaroo_race_second_place"])
          else{
            exampleEmbed8.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["kangaroo_race_third_place"]) exampleEmbed8.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["kangaroo_race_third_place"])
          else{
            exampleEmbed8.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["kangaroo_race_points"]) exampleEmbed8.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["kangaroo_race_points"])
          else{
            exampleEmbed8.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["kangaroo_race_played"]) exampleEmbed8.addField(`\u200B`, "**Jogou Kangaroo: " + response.data.response.stats.party["kangaroo_race_played"] + " vezes**")
          else{
            exampleEmbed8.addField('\u200B' , "**Jogou Kangaroo: 0 vezes**")
          };
          
        message.reply({embeds : [exampleEmbed8]});
             
              
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})