const Command = require("../Structures/Command");
const Discord = require("discord.js");
const axios= require("axios");




const apiRank = "https://mush.com.br/api/leaderboard/party"

module.exports = new Command({
    name:"topdez",
    description: "Mostra o top 10 do party",

    
    

    async run(message,args,client){
        


        axios.get('https://mush.com.br/api/leaderboard/party',{
            
        
           
        }) .then((ranktopdez) => {
            const { MessageEmbed } = require('discord.js');

           
            const exampleEmbed = new MessageEmbed()
                .setColor('#FFFFFF')
                .setTitle("\u200b" + '--------------------------🏆 TOP 10 TOTAL 🏆--------------------------' + "\u200b")
                .addFields(
                    { name: ' \u200b', value: "**🥇 " + ranktopdez.data.records[0].account.username + "** " + "-"+ " **Pontos:** " + ranktopdez.data.records[0]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[0]["party:first_place"] + "  **2º LUGAR: **" + ranktopdez.data.records[0]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[0]["party:third_place"]  , inline:false},
                    { name: ' \u200b', value: "**🥈 " + ranktopdez.data.records[1].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[1]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[1]["party:first_place"] + "  **2º LUGAR: **" + ranktopdez.data.records[1]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[1]["party:third_place"] , inline:false},
                    { name: ' \u200b', value: "**🥉 " + ranktopdez.data.records[2].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[2]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[2]["party:first_place"] + "  **2º LUGAR:** " + ranktopdez.data.records[2]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[2]["party:third_place"], inline:false},
                    { name: ' \u200b', value: "**4º " + ranktopdez.data.records[3].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[3]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[3]["party:first_place"] + "  **2º LUGAR: **" + ranktopdez.data.records[3]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[3]["party:third_place"], inline:false},
                    { name: ' \u200b', value: "**5º " + ranktopdez.data.records[4].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[4]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[4]["party:first_place"] + "  **2º LUGAR:** " + ranktopdez.data.records[4]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[4]["party:third_place"], inline:false},
                    { name: ' \u200b', value: "**6º " + ranktopdez.data.records[5].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[5]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[5]["party:first_place"] + "  **2º LUGAR:** " + ranktopdez.data.records[5]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[5]["party:third_place"], inline:false},
                    { name: ' \u200b', value: "**7º " + ranktopdez.data.records[6].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[6]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[6]["party:first_place"] + "  **2º LUGAR:** " + ranktopdez.data.records[6]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[6]["party:third_place"], inline:false},
                    { name: ' \u200b', value: "**8º " + ranktopdez.data.records[7].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[7]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[7]["party:first_place"] + "  **2º LUGAR:** " + ranktopdez.data.records[7]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[7]["party:third_place"], inline:false},
                    { name: ' \u200b', value: "**9º " + ranktopdez.data.records[8].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[8]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[8]["party:first_place"] + "  **2º LUGAR:** " + ranktopdez.data.records[8]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[8]["party:third_place"], inline:false},
                    { name: ' \u200b', value: "**10º " + ranktopdez.data.records[9].account.username + "** " + "-" + " **Pontos:** " + ranktopdez.data.records[9]['party:points'] + "  **1º LUGAR:** " + ranktopdez.data.records[9]["party:first_place"] + "  **2º LUGAR:** " + ranktopdez.data.records[9]["party:second_place"]+ "  **3º LUGAR:** " + ranktopdez.data.records[9]["party:third_place"], inline:false},
                    
                )
                .setImage("https://i.imgur.com/4g763jv.png")
               
              
            
                message.reply({embeds : [exampleEmbed]});

        }).catch((err) =>{
            console.error("ERR:", err)
        })
        
       
    }
       
    

})



        
