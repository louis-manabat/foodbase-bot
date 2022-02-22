// Add a food to database

const { SlashCommandBuilder } = require('@discordjs/builders');
const { prisma } = require("../deploy-commands");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addfood')
        .setDescription('Adds a new food to the database'),
    async execute(interaction) {
        await prisma.user.create({
            // data: {
            //     name: 
            // }
        })
    }
}