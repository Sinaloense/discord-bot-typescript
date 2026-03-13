import { Collection } from "discord.js";

import { commandPing, commandServer, commandUser } from "./index.js";
import { CommandInterface } from "../interfaces/index.js";

export const commandsCollection: Collection<string, CommandInterface> =
  new Collection();

export const commandsCollectionSet = () => {
  commandsCollection.clear();

  commandsCollection.set(commandPing.data.name, commandPing);
  commandsCollection.set(commandServer.data.name, commandServer);
  commandsCollection.set(commandUser.data.name, commandUser);
};
