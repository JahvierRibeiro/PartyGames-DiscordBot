const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");





module.exports = new Command({
    name:"blockparty",
    description: "Mostra os stats de outros jogadores do party",
    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
          const exampleEmbed3 = new MessageEmbed()
                .setColor('#000')
                
          .setTitle("Stats de " + response.data.response.account.username)
          .addField('\u200B', "**BlockParty** ")
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["block_party_first_place"]) exampleEmbed3.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["block_party_first_place"])
          else{
            exampleEmbed3.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["block_party_second_place"]) exampleEmbed3.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["block_party_second_place"])
          else{
            exampleEmbed3.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["block_party_third_place"]) exampleEmbed3.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["block_party_third_place"])
          else{
            exampleEmbed3.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["block_party_points"]) exampleEmbed3.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["block_party_points"])
          else{
            exampleEmbed3.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["block_party_played"]) exampleEmbed3.addField(`\u200B`, "**Jogou BlockParty: " + response.data.response.stats.party["block_party_played"] + " vezes**")
          else{
            exampleEmbed3.addField('\u200B' , "**Jogou BlockParty: 0 vezes**")
          };
          
        message.reply({embeds : [exampleEmbed3]});
             
              
       
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})