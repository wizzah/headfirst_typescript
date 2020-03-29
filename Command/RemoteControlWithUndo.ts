import { Command } from "./Command";
import { NoCommand } from "./NoCommand";

export class RemoteControlWithUndo {
    onCommands: Command[];
    offCommands: Command[];
    undoCommand: Command;

    constructor() {
        this.onCommands = new Array(7);
        this.offCommands = new Array(7);

        let noCommand: Command = new NoCommand();
        for (var i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
        this.undoCommand = noCommand;
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number): void {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    offButtonWasPushed(slot: number): void {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    undoButtonWasPushed(): void {
        this.undoCommand.undo();
    }
}