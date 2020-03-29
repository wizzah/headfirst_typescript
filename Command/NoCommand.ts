import { Command } from "./Command";

export class NoCommand implements Command {
    execute(): void {
        console.log("No command");
    }
    undo(): void {}
}