// List food in the database

const { SlashCommandBuilder } = require('@discordjs/builders');
const { prisma } = new PrismaClient;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('listfood')
		.setDescription('Lists the food in the database'),

	async execute(interaction) {
		await interaction.reply('Listing food in the database');
        try {
            // if ()
            // await prisma.user.create({
            //     data: {
            //         name:
            //     }
            // })
        } catch (e) {
            throw e
        } finally {
            await prisma.$disconnect();
        }
		await interaction.followUp('End of list');
	},
};