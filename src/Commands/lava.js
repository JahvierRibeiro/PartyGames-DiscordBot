const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");




module.exports = new Command({
    name:"lava",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
           
          const exampleEmbed9 = new MessageEmbed()
          .setColor('#000')
          .addField('\u200B', "**Lava** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["lava_first_place"]) exampleEmbed9.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["lava_first_place"])
          else{
            exampleEmbed9.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["lava_second_place"]) exampleEmbed9.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["lava_second_place"])
          else{
            exampleEmbed9.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["lava_third_place"]) exampleEmbed9.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["lava_third_place"])
          else{
            exampleEmbed9.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["lava_points"]) exampleEmbed9.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["lava_points"])
          else{
            exampleEmbed9.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["lava_played"]) exampleEmbed9.addField(`\u200B`, "**Jogou Lava: " + response.data.response.stats.party["lava_played"] + " vezes**")
          else{
            exampleEmbed9.addField('\u200B' , "**Jogou Lava: 0 vezes**")
          };
          
        message.reply({embeds : [exampleEmbed9]});
             
              
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})