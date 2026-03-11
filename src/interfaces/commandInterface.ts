import { CommandInteraction, SlashCommandOptionsOnlyBuilder } from "discord.js";

export interface CommandInterface {
  data: SlashCommandOptionsOnlyBuilder;
  execute: (interaction: CommandInteraction) => void;
}
