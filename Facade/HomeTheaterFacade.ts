import { Amplifier, Tuner, DVDPlayer, Projector, CDPlayer, TheaterLights, PopcornPopper, Screen } from "./Classes";

export class HomeTheaterFacade {
    amp: Amplifier;
    tuner: Tuner;
    dvd: DVDPlayer;
    cd: CDPlayer;
    projector: Projector;
    lights: TheaterLights;
    screen: Screen;
    popper: PopcornPopper;

    constructor(
        amp: Amplifier,
        tuner: Tuner,
        dvd: DVDPlayer,
        cd: CDPlayer,
        projector: Projector,
        lights: TheaterLights,
        screen: Screen,
        popper: PopcornPopper
    ) {
        this.amp = amp;
        this.tuner = tuner;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.lights = lights;
        this.screen = screen;
        this.popper = popper;
    }

    watchMovie(movie: String): void {
        console.log("Gettin' ready to watch a movie...");
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.screen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDVD(this.dvd);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }

    endMovie(): void {
        console.log("Shutting movie theater down...");
        this.popper.off();
        this.lights.on();
        this.screen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    }
}