import { Command } from "./Command";
import { TV } from "./TV";

export class TVOnCommand implements Command {
    tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    execute(): void {
        this.tv.on();
    }

    undo(): void { }
}