const Command = require("../Structures/Command");
const Discord = require("discord.js");
const  axios  = require("axios");
const { pagination } = require("reconlx");
const { blockpartyembed  } = require("./blockparty.js");




                


module.exports = new Command( {
    name:"player",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){

       
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        .then( (response) => {
          
               
          console.log(response.data.response.stats["party:first_place"])
          const { MessageEmbed } = require('discord.js');

        

          // inside a command, event listener, etc.
         const exampleEmbed2 = new MessageEmbed()
              .setColor('#000')
              .setTitle("Stats de " + response.data.response.account.username)
              .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
              .addFields(
                  { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:first_place"]},
                  
                  { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:second_place"]},

                  { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:third_place"]},

                  { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:points"]},


                  { name: '\u200B', value:"**Jogou Party: ** " + "**" +response.data.response.stats["party:played"]+"**"+ " **vezes**"},
                  { name: '\u200B', value:"Banido? " + response.data.response["banned"]},
                  
              )
              

              
             
              
              .setFooter("Ultima vez online no mine: " + response.data.response["lastLogin"])
             
                if(response.data.response["banned"] == "false"){
                  return message.reply("Ta vivo ele/ela :)")
                }
                
                const exampleEmbed3 = new MessageEmbed()
                .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**BlockParty** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:block_party_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:block_party_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:block_party_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:block_party_points"]},


              { name: '\u200B', value:"**Jogou BlockParty: ** " + "**" +response.data.response.stats["party:block_party_played"]+"**"+ " **vezes**"},

              
          );
          const exampleEmbed4 = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**Corrida Mortal** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:race_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:race_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:race_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:race_points"]},


              { name: '\u200B', value:"**Jogou Corrida Mortal: ** " + "**" +response.data.response.stats["party:race_played"]+"**"+ " **vezes**"},

              
          );
          
         
          const exampleEmbed5 = new MessageEmbed() 
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**Fisherman** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:fisherman_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:fisherman_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:fisherman_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:fisherman_points"]},


              { name: '\u200B', value:"**Jogou Fisherman: ** " + "**" +response.data.response.stats["party:fisherman_played"]+"**"+ " **vezes**"},

              
          );
           const exampleEmbed6 = new MessageEmbed()
           .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**Grappler** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:grappler_race_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:grappler_race_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:grappler_race_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:grappler_race_points"]},


              { name: '\u200B', value:"**Jogou Grappler: ** " + "**" +response.data.response.stats["party:grappler_race_played"]+"**"+ " **vezes**"},

              
          );
          const exampleEmbed7 = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**Caçador** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:hunter_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:hunter_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:hunter_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:hunter_points"]},


              { name: '\u200B', value:"**Jogou Caçador: ** " + "**" +response.data.response.stats["party:hunter_played"]+"**"+ " **vezes**"},

              
          );
          const exampleEmbed8 = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**Kangaroo** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:kangaroo_race_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:kangaroo_race_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:kangaroo_race_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:kangaroo_race_points"]},


              { name: '\u200B', value:"**Jogou Kangaroo: ** " + "**" +response.data.response.stats["party:kangaroo_race_played"]+"**"+ " **vezes**"},

              
          )
          

          const exampleEmbed9 = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**Lava** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:lava_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:lava_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:lava_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:lava_points"]},


              { name: '\u200B', value:"**Jogou Lava: ** " + "**" +response.data.response.stats["party:lava_played"]+"**"+ " **vezes**"},

              
          );
          const exampleEmbed10 = new MessageEmbed()
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

              
          );
          const exampleEmbed11 = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**One in the chamber** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:oitc_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:oitc_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:oitc_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:oitc_points"]},


              { name: '\u200B', value:"**Jogou One in the chamber: ** " + "**" +response.data.response.stats["party:oitc_played"]+"**"+ " **vezes**"},

              
          );
          const exampleEmbed12 = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**Stomper** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:stomper_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:stomper_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:stomper_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:stomper_points"]},


              { name: '\u200B', value:"**Jogou Stomper: ** " + "**" +response.data.response.stats["party:stomper_played"]+"**"+ " **vezes**"},

              
          );
          const exampleEmbed13 = new MessageEmbed()
          .setColor('#000')
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          .addFields(
            { name: '\u200B', value:"**TNTRun** "},

              { name: '\u200B', value:"**1º Lugar:** " + response.data.response.stats["party:tnt_run_first_place"]},
              
              { name: '\u200B', value:"**2º Lugar:** " + response.data.response.stats["party:tnt_run_second_place"]},

              { name: '\u200B', value:"**3º Lugar:** " + response.data.response.stats["party:tnt_run_third_place"]},

              { name: '\u200B', value:"**Pontos:** " + response.data.response.stats["party:tnt_run_points"]},


              { name: '\u200B', value:"**Jogou TNTRun: ** " + "**" +response.data.response.stats["party:tnt_run_played"]+"**"+ " **vezes**"},

              
          );
          
          
          
                const embeds = [exampleEmbed2,exampleEmbed3,exampleEmbed4,exampleEmbed5,exampleEmbed6,exampleEmbed7,exampleEmbed8,exampleEmbed9,exampleEmbed10,exampleEmbed11,exampleEmbed12,exampleEmbed13];
                pagination({
                    embeds: embeds ,
                    message:message,
                    time:50000,
                    channel: message.channel,
                    author: message.author,
                    pagetravel:true,
                    fastSkip:true,
                    
                })
                
         
            } 
            
            
           
             
            
           

          
  
        
      
              )

              

        .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
        
    }
       
    

})