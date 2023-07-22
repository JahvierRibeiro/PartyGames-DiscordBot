const Command = require("../Structures/Command");
const Discord = require("discord.js");
const  axios  = require("axios");
const { MessageEmbed } = require('discord.js');
const Client = require("../Structures/Client");
const { createSlider } = require("discord-epagination");
const { pagination } = require("reconlx");
const { blockpartyembed  } = require("./blockparty.js");




                


module.exports = new Command( {
    name:"player",
    description: "Mostra os stats de outros jogadores do party",

    async run(message,args,client){
       
       
        axios.get('https://mush.com.br/api/player/' + args.slice(1).join(""))
        
        .then( (response) => {
          
         
            
          let statsplayer = response.data.response.stats
          

          // inside a command, event listener, etc.
         const exampleEmbed2 = new MessageEmbed()
              .setColor('#000')
              .setFooter("RANK: " + response.data.response.rank["title"] + "")
              .setTitle("Stats de " + response.data.response.account.username)
              .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
              if (response.data.response.stats.party["first_place"]) exampleEmbed2.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["first_place"])
              else{
                exampleEmbed2.addField('\u200B' , "**1º Lugar:** " + "0")
              };
              if (response.data.response.stats.party["second_place"]) exampleEmbed2.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["second_place"])
              else{
                exampleEmbed2.addField('\u200B' , "**2º Lugar:** " + "0")
              };
            if (response.data.response.stats.party["third_place"]) exampleEmbed2.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["third_place"])
              else{
                exampleEmbed2.addField('\u200B' , "**3º Lugar:** " + "0")
              };
              if (response.data.response.stats.party["points"]) exampleEmbed2.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["points"])
              else{
                exampleEmbed2.addField('\u200B' , "**Pontos:** " + "0")
              };
              if (response.data.response.stats.party["played"]) exampleEmbed2.addField(`\u200B`, "**Jogou Party: " + response.data.response.stats.party["played"] + " vezes**")
              else{
                exampleEmbed2.addField('\u200B' , "**Jogou Party: 0 vezes**" )
              };
             
              
              
              
                if(!response.data.response["banned"]){
                 exampleEmbed2.addFields({name:'\u200B', value:"Banido Ou Vivo? " + "Vivo"})
                }
                else if (response.data.response["banned"] == true){
                  exampleEmbed2.addFields({name:'\u200B', value:"Banido Ou Vivo? " + "Banido :("})
                }
               
                
               
              
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
          
         
          const exampleEmbed5 = new MessageEmbed() 
          .setColor('#000')
          .addField('\u200B', "**Fisherman** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["fisherman_first_place"]) exampleEmbed5.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["fisherman_first_place"])
          else{
            exampleEmbed5.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["fisherman_second_place"]) exampleEmbed5.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["fisherman_second_place"])
          else{
            exampleEmbed5.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["fisherman_third_place"]) exampleEmbed5.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["fisherman_third_place"])
          else{
            exampleEmbed5.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["fisherman_points"]) exampleEmbed5.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["fisherman_points"])
          else{
            exampleEmbed5.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["fisherman_played"]) exampleEmbed5.addField(`\u200B`, "**Jogou Fisherman: " + response.data.response.stats.party["fisherman_played"] + " vezes**")
          else{
            exampleEmbed5.addField('\u200B' , "**Jogou Fisherman: 0 vezes**")
          };
         
           const exampleEmbed6 = new MessageEmbed()
           .setColor('#000')
           .addField('\u200B', "**Grappler** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["grappler_race_first_place"]) exampleEmbed6.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["grappler_race_first_place"])
          else{
            exampleEmbed6.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["grappler_race_second_place"]) exampleEmbed6.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["grappler_race_second_place"])
          else{
            exampleEmbed6.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["grappler_race_third_place"]) exampleEmbed6.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["grappler_race_third_place"])
          else{
            exampleEmbed6.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["grappler_race_points"]) exampleEmbed6.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["grappler_race_points"])
          else{
            exampleEmbed6.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["grappler_race_played"]) exampleEmbed6.addField(`\u200B`, "**Jogou Grappler: " + response.data.response.stats.party["grappler_race_played"] + " vezes**")
          else{
            exampleEmbed6.addField('\u200B' , "**Jogou Grappler: 0 vezes**")
          };
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
          const exampleEmbed10 = new MessageEmbed()
          .setColor('#000')
          .addField('\u200B', "**MlgSumo** ")
          .setTitle("Stats de " + response.data.response.account.username)
          .setThumbnail("https://crafatar.com/avatars/" + response.data.response.account.unique_id)
          if (response.data.response.stats.party["mlg_sumo_first_place"]) exampleEmbed10.addField(`\u200B`, "**1º Lugar: **" + response.data.response.stats.party["mlg_sumo_first_place"])
          else{
            exampleEmbed10.addField('\u200B' , "**1º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["mlg_sumo_second_place"]) exampleEmbed10.addField(`\u200B`, "**2º Lugar: **" + response.data.response.stats.party["mlg_sumo_second_place"])
          else{
            exampleEmbed10.addField('\u200B' , "**2º Lugar:** " + "0")
          };
          if (response.data.response.stats.party["mlg_sumo_third_place"]) exampleEmbed10.addField(`\u200B`, "**3º Lugar: **" + response.data.response.stats.party["mlg_sumo_third_place"])
          else{
            exampleEmbed10.addField('\u200B' , "**3º Lugar:** " + "0")
          };

          if (response.data.response.stats.party["mlg_sumo_points"]) exampleEmbed10.addField(`\u200B`, "**Pontos: **" + response.data.response.stats.party["mlg_sumo_points"])
          else{
            exampleEmbed10.addField('\u200B' , "**Pontos:** 0")
          };
          if (response.data.response.stats.party["mlg_sumo_played"]) exampleEmbed10.addField(`\u200B`, "**Jogou MlgSumo: " + response.data.response.stats.party["mlg_sumo_played"] + " vezes**")
          else{
            exampleEmbed10.addField('\u200B' , "**Jogou MlgSumo: 0 vezes**")
          };
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
          };
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
          
          
                const embeds = [exampleEmbed2,exampleEmbed3,exampleEmbed4,exampleEmbed5,exampleEmbed6,exampleEmbed7,exampleEmbed8,exampleEmbed9,exampleEmbed10,exampleEmbed11,exampleEmbed12,exampleEmbed13];
                createSlider({
                  // Message object from discord.js
                  message: message,
                  // Array of embeds that will be paginated
                  embeds: embeds,
                  // Other buttons
                  otherButtons: {
                    // First page button
                    firstButton: {
                      enabled: true,
                      // Make the button behind the back and foward buttons. [..., "previous", "next"]
                      position: 0,
                    },
                    // Last page button
                    lastButton: {
                      enabled: true,
                      // Make the button in front of the back and foward buttons. ["first", "previous", "next", ...]
                      position: 3,
                    },
                    // Delete button
                    deleteButton: {
                      enabled: false,
                      // Make the button in the middle of all the buttons. ["first", "previous", ... , "next", "last"]
                      position: 2,
                    },
                  },
                  // Button customization
                  buttons: [
                    // Customization for the back button
                    { name: "back", emoji: "◀", style: "PRIMARY" },
                    // Customization for the foward button
                    { name: "foward", emoji: "▶", style: "PRIMARY" },
                    // Customization for the first page button
                    { name: "first", emoji: "⏪", style: "PRIMARY" },
                    // Customization for the last page button
                    { name: "last", emoji: "⏩", style: "PRIMARY" },
                    // Customization for the delete button
                    { name: "delete", emoji: "❌", style: "DANGER" },
                  ],
                  // Duration wich will define how much time the buttons will be interactable.
                  time: 60000,
                });
                
                
                                                                                                                                      
         
        }
            
              )
                .catch(function (error) {
     
          console.log(error, "Player não valido!")
          return message.reply("Player não valido!");
          
        });
      
    }
       

})