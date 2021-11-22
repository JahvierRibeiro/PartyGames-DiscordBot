const Command = require("../Structures/Command");

const { MessageEmbed } = require('discord.js');


const Discord = require("discord.js");
const  axios  = require("axios");




module.exports = new Command({
    name:"mlgsumo",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
           
          const mlgsumoembed = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**MlgSumo** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:mlg_sumo_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:mlg_sumo_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:mlg_sumo_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:mlg_sumo_points"]},


              { name: '\u200B', value:"**Jogou MlgSumo: ** " + "**" +response.data.response.stats["party:mlg_sumo_played"]+"**"+ " **vezes**"},

              
          )
          
        message.reply({embeds : [mlgsumoembed]});
             
              
   })

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})