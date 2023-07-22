const Command = require("../Structures/Command");

const Discord = require("discord.js");

module.exports = new Command({
 
    name: "help",
    description: "Todos os comandos do bot",

    async run(message,args,client){

        const embed = new Discord.MessageEmbed();

        embed

        .setTitle("Comandos: !party [comando]")
       
        
        .addFields(
            {
                name: "ping",
                value: "Mostra o ping entre o teu client e o bot" ,
                inline: true,
               
                
            }

            
          
            ,
        )
        .addFields(
            {
                name: "topdez",
                value: "Mostra o top 10 total do party" ,
                inline: false,
               
                
            }
            
            
          
            ,
        )
       
        .addFields(
            {
                name: "player [nick]",
                value: "Mostra o stats do party de um player específico" ,
                inline: false,
               
                
            }
            
            
          
            ,
        )
        
        .addFields(
            {
                name: "[modo] [nick]",
                value: "Mostra os stats de um player em um modo específico. **Modos do Party:blockparty,grappler,kangaroo,mlgsumo,corridamortal,stomper,tnt run,fisherman,lava,oneinthechamber,caçador**" ,
                inline: false,
               
                
            }
            
            
          
            ,
        )
          
        .setColor('RANDOM')
        
        message.reply({embeds : [embed]});
    }


});