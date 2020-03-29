import { Command } from "./Command";
import { Stereo } from "./Stereo";

export class StereoOnCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
    }

    undo(): void { }
}