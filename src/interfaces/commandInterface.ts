import { SlashCommandBuilder } from "discord.js";

export interface commandInterface {
    data: SlashCommandBuilder,
    execute: Function,
}