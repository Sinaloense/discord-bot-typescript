import fs from 'node:fs';
import path from 'node:path';

import {
	REST,
    Routes,
} from 'discord.js';

import { DISCORD_CLIENT_ID, DISCORD_TOKEN } from '../utils/configurationUtils';
import { commandInterface } from '../interfaces/interfaces';

// Colección de comandos
const commands: any[] = [];
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
	commands.push(command.data.toJSON());
}

// Hacer peticiones
const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

// Eliminar todos los comandos
rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);

// Registrar todos los comandos
rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);