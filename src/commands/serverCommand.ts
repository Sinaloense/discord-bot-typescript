import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

import { CommandInterface } from "../interfaces/index.js";

export const commandServer: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  execute: async (interaction: ChatInputCommandInteraction<CacheType>) => {
    await interaction.reply(
      `Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`,
    );
  },
};
