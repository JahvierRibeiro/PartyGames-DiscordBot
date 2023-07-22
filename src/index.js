console.clear();

const Client = require("./Structures/Client");

const configs = require("./data/config.json");

const dotenv = require('dotenv');

dotenv.config();





const Commands = require("./Structures/Command");

const client = new Client();

const fs = require('fs');


client.on("ready" , ()=> console.log("Bot is Online!"));


client.login(process.env.DISCORD_TOKEN);
console.log(process.env.prefix);

fs.readdirSync("./src/Commands").filter(file => file.endsWith(".js")).forEach(file =>{

    const command = require("./Commands/" + file);
    console.log("Command "+ command.name + " loaded");
    client.commands.set(command.name, command);


});


client.on("messageCreate", message => {

    

    if(!message.content.startsWith(configs.prefix) ) return;
    const args = message.content.substring(configs.prefix.length).split(/ +/);
    
    const command = client.commands.find(cmd => cmd.name ==  args[0]);

    if(!command) return message.reply("Comando não valido!");

    command.run(message,args,client);


    
}) ;
