import {
    CacheType,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
} from 'discord.js';

import { commandInterface } from '../interfaces/interfaces';

const command: commandInterface = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	execute: async (interaction: ChatInputCommandInteraction<CacheType>) => {
        await interaction.reply(`Pong! ${ interaction.client.ws.ping }`);
    }
};

export default command;