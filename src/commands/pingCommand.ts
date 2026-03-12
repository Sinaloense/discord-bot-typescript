import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

import { CommandInterface } from "../interfaces/index.js";

export const commandPing: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  execute: async (interaction: ChatInputCommandInteraction<CacheType>) => {
    await interaction.reply(`Pong! ${interaction.client.ws.ping}`);
  },
};
