const Discord = require("discord.js");

const Command = require("./Command.js");

const intents = new Discord.Intents(32767);

class Client extends Discord.Client{
    constructor(options){
        super({intents});

        this.commands = new Discord.Collection();


    }

}

module.exports = Client;