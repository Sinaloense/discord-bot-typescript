import { Collection } from "discord.js";

import { CommandInterface } from "../interfaces/index.js";
import { commandPing } from "./pingCommand.js";
import { commandServer } from "./serverCommand.js";
import { commandUser } from "./userCommand.js";

export const commandsCollection: Collection<string, CommandInterface> =
  new Collection();

export const commandsCollectionSet = () => {
  commandsCollection.clear();

  commandsCollection.set(commandPing.data.name, commandPing);
  commandsCollection.set(commandServer.data.name, commandServer);
  commandsCollection.set(commandUser.data.name, commandUser);
};
