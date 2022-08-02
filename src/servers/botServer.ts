import fs from 'node:fs';
import path from 'node:path';

import {
    Client,
    Collection,
    IntentsBitField,
    Message,
} from 'discord.js';

import { DISCORD_TOKEN } from '../utils/configurationUtils';
import { commandInterface } from '../interfaces/interfaces';

class BotServer {
    constructor() {
        // Crear nueva instancia tipo cliente
        const client = new Client({
            intents: [
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.GuildMessages,
            ],
        });

        // Cuando el cliente esta listo
        client.once('ready', (bot: Client<boolean>) => {
            console.log(`Bot: ${ bot.user?.username }`);
        });

        // Cuando envian mensajes
        client.on('messageCreate', (msg: Message<boolean>) => {
            // Si el que envio el mensaje es un bot
            if(msg.author.bot) {
                return;
            }

            console.log(msg);
        });

        // Colección de comandos
        const commands: Collection<String, commandInterface> = new Collection();
        // Ruta de comandos
        const commandsPath = path.join(__dirname, '../commands');
        // Archivos con comandos
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        // Ciclo archivos con comandos
        for(const file of commandFiles) {
            // Archivo de comando
            const filePath = path.join(commandsPath, file);

            // Comando
            const command: commandInterface = require(filePath).default;

            // Agregar comando a la colección
            commands.set(command.data.name, command);
        }

        // Cuando se recibe una interacción (slash command /)
        client.on('interactionCreate', async interaction => {
            // Si no es un comando de chat
            if (!interaction.isChatInputCommand()) {
                return;
            }

            // Leer comando
            const command = commands.get(interaction.commandName);

            // Si no es un comando registrado
            if (!command) {
                return;
            }

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'Ocurrió un error mientras se ejecutaba este comando!', ephemeral: true });
            }
        });

        // Iniciar sesión en Discord con el token
        client.login(DISCORD_TOKEN);
    }
}

export default BotServer;