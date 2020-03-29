import { Command } from "./Command";
import { Stereo } from "./Stereo";

export class StereoOnWithCDCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    
    execute(): void {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }

    undo(): void {}
}