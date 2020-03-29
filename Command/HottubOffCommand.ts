import { Command } from "./Command";
import { HotTub } from "./HotTub";

export class HottubOffCommand implements Command {
    hottub: HotTub;

    constructor(hottub: HotTub) {
        this.hottub = hottub;
    }

    execute(): void {
        this.hottub.off();
    }

    undo(): void { }
}