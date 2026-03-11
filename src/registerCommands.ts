// Cargar env
process.loadEnvFile();

import { REST, Routes } from "discord.js";

import { commandsCollection, commandsCollectionSet } from "./commands/index.js";

// Cargar commandsCollection
commandsCollectionSet();

// Hacer peticiones
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

// Eliminar todos los comandos
rest
  .put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), { body: [] })
  .then(() => console.log("Successfully deleted all application commands."))
  .catch(console.error);

// Registrar comandos
rest
  .put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), {
    body: commandsCollection.map((command) => command.data.toJSON()),
  })
  .then(() =>
    console.log(
      "Successfully registered application commands: " +
        commandsCollection.map((command) => command.data.name).join(", "),
    ),
  )
  .catch(console.error);
