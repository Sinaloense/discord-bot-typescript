import {
    CacheType,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
} from 'discord.js';

import { commandInterface } from '../interfaces/interfaces';

const command: commandInterface = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Replies with server info!'),
	execute: async (interaction: ChatInputCommandInteraction<CacheType>) => {
        await interaction.reply(`Your tag: ${ interaction.user.tag }\nYour id: ${ interaction.user.id }`);
    }
};

export default command;