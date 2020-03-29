import { Command } from "./Command";

export class MacroCommand implements Command {
    commands: Command[];

    constructor(commands: Command[]) {
        this.commands = commands;
    }

    execute(): void {
        for (var i = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    }

    undo(): void {
        for (var i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i].undo();
        }
    }
}