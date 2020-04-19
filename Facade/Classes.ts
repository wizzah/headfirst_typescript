// Not explicitly used for the exercise
export class Tuner {}
export class CDPlayer {}

export class Amplifier {
    on(): void {
        console.log("Amp on");
    }
    off(): void {
        console.log("Amp off");
    }
    setDVD(dvd: DVDPlayer): void {
        console.log("Amp set to DVD player");
    }
    setSurroundSound(): void {
        console.log("Amp set to surround sound");
    }
    setVolume(volume: number): void {
        console.log(`Amp volume set to ${volume}`);
    }
}
export class DVDPlayer {
    on(): void {
        console.log("DVD player on");
    }
    off(): void {
        console.log("DVD player off");
    }
    play(movie: String) {
        console.log(`Playing ${movie}`);
    }
    stop(): void {
        console.log("Stopping DVD player");
    }
    eject(): void {
        console.log("Ejecting from DVD player");
    }
}
export class Projector {
    on(): void {
        console.log("Projector on");
    }
    off(): void {
        console.log("Projector off");
    }
    wideScreenMode(): void {
        console.log("Projector set to wide screen mode");
    }
}

export class TheaterLights {

    dim(value: number): void {
        console.log(`Lights dimming to ${value}`);
    }
    on(): void {
        console.log("Lights on");
    }
    off(): void {
        console.log("Lights off");
    }
}

export class Screen {
    up(): void {
        console.log("Screen up");
    }
    down(): void {
        console.log("Screen down");
    }
}

export class PopcornPopper {
    on(): void {
        console.log("popper on!");
    }
    pop(): void {
        console.log("popper poppin'!");
    }
    off(): void {
        console.log("popper no longer poppin'");
    }
}