// Cargar env (Es necesario tambien en este archivo, por que al ejecutar registerCommands, no estan cargadas, no se por que)
process.loadEnvFile();

import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from "discord.js";

import { CommandInterface } from "../interfaces/index.js";

export const commandUser: CommandInterface = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with server info!"),
  execute: async (interaction: ChatInputCommandInteraction<CacheType>) => {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,
    );
  },
};
