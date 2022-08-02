import {
    CacheType,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
} from 'discord.js';

import { commandInterface } from '../interfaces/interfaces';

const command: commandInterface = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	execute: async (interaction: ChatInputCommandInteraction<CacheType>) => {
        await interaction.reply(`Server name: ${ interaction.guild?.name }\nTotal members: ${ interaction.guild?.memberCount }`);
    }
};

export default command;