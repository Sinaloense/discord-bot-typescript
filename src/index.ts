// Cargar env
process.loadEnvFile();

import { BotServer } from "./servers/index.js";

// Inicializar bot server
new BotServer();
