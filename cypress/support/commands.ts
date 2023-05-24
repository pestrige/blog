import * as articleCommands from "./commands/article";
import * as commonCommands from "./commands/common";
import * as commentCommands from "./commands/comment";
import * as profileCommands from "./commands/profile";

Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
