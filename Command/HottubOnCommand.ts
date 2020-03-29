import { Command } from "./Command";
import { HotTub } from "./HotTub";

export class HottubOnCommand implements Command {
    hottub: HotTub;

    constructor(hottub: HotTub) {
        this.hottub = hottub;
    }

    execute(): void {
        this.hottub.on();
    }

    undo(): void { }
}