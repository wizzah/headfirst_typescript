import { Command } from "./Command";
import { NoCommand } from "./NoCommand";
export class RemoteControl {
    onCommands: Command[];
    offCommands: Command[];

    constructor() {
        this.onCommands = new Array(7);
        this.offCommands = new Array(7);

        let noCommand: Command = new NoCommand();

        for (var i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }

    }
    
    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number) {
        this.onCommands[slot].execute();
    }

    offButtonWasPushed(slot: number) {
        this.offCommands[slot].execute();
    }

    toString(): string {
        // we don't really have string buffer in JS :)
        let stringBuff: string = "";
        stringBuff.concat("\n---Remote control----\n");
        for (var i = 0; i < this.onCommands.length; i++) {
            stringBuff.concat("[slot" + i + "] \n");
        }
        return stringBuff.toString();
    }
}