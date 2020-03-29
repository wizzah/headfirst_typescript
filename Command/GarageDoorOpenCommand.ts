import { Command } from "./Command";
import { GarageDoor } from "./GarageDoor";

export class GarageDoorOpenCommand implements Command {
    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    execute(): void {
        this.garageDoor.up();
    }
    
    undo(): void {}
}