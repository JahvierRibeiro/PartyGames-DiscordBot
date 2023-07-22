const Command = require("../Structures/Command.js");

module.exports = new Command({
    name: "ping",
    description: "Mostra o ping do bot",
    async run(message, args,client){
    message.reply("Ping: " + client.ws.ping + " ms.");
        


    }
});