import { Client, IntentsBitField, Message, MessageFlags } from "discord.js";

import {
  commandsCollection,
  commandsCollectionSet,
} from "../commands/index.js";

export class BotServer {
  private client?: Client<boolean>;

  constructor() {
    this.init();
  }

  async init() {
    // Inicializar bot
    this.discord();
  }

  async discord() {
    // Cargar commandsCollection
    commandsCollectionSet();

    // Crear nueva instancia tipo cliente
    this.client = new Client({
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
      ],
    });

    // Cuando el cliente esta listo
    this.client.once("clientReady", (bot: Client<boolean>) => {
      console.log(
        `Bot is running ${process.env.DEV === "TRUE" ? "DEV" : "PROD"} MODE`,
      );
      console.log("Bot name: " + bot.user?.username);
    });

    // Cuando envian mensajes
    this.client.on("messageCreate", (msg: Message<boolean>) => {
      // Si el que envio el mensaje es un bot
      if (msg.author.bot) {
        return;
      }
    });

    this.client.on("interactionCreate", async (interaction) => {
      // Si no es un comando de chat
      if (!interaction.isChatInputCommand()) {
        return;
      }

      // Leer comando
      const command = commandsCollection.get(interaction.commandName);

      // Si no es un comando registrado
      if (!command) {
        return;
      }

      try {
        command.execute(interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "Ocurrió un error mientras se ejecutaba este comando!",
          flags: MessageFlags.Ephemeral,
        });
      }
    });

    // Iniciar sesión en Discord con el token
    this.client.login(process.env.DISCORD_TOKEN);
  }
}
