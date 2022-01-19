const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");




module.exports = new Command({
    name:"tntrun",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
           
          const exampleEmbed13 = new MessageEmbed()
          .setColor('#000')
          .addField('\u200B', "**TNTRun** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["tnt_run_first_place"]) exampleEmbed13.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["tnt_run_first_place"])
          else{
            exampleEmbed13.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["tnt_run_second_place"]) exampleEmbed13.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["tnt_run_second_place"])
          else{
            exampleEmbed13.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["tnt_run_third_place"]) exampleEmbed13.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["tnt_run_third_place"])
          else{
            exampleEmbed13.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["tnt_run_points"]) exampleEmbed13.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["tnt_run_points"])
          else{
            exampleEmbed13.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["tnt_run_played"]) exampleEmbed13.addField(`\u200B`, "**Jogou TNTRun: " + response.data.response.stats.party["tnt_run_played"] + " vezes**")
          else{
            exampleEmbed13.addField('\u200B' , "**Jogou TNTRun: 0 vezes**")
          };
          
        message.reply({embeds : [exampleEmbed13]});
             
              
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})