import { Amplifier, Tuner, DVDPlayer, Projector, CDPlayer, TheaterLights, PopcornPopper, Screen } from "./Classes";
import { HomeTheaterFacade } from "./HomeTheaterFacade";

export class HomeTheaterTestDrive {
    static main(args: String[]): void {
        let amp:Amplifier = new Amplifier();
        let tuner:Tuner = new Tuner();
        let dvd:DVDPlayer = new DVDPlayer();
        let homeTheater: HomeTheaterFacade = new HomeTheaterFacade(
            new Amplifier(),
            new Tuner(),
            new DVDPlayer(),
            new CDPlayer(),
            new Projector(),
            new TheaterLights(),
            new Screen(),
            new PopcornPopper()
        );
        homeTheater.watchMovie("Star Wars");
        homeTheater.endMovie();
    }
}

let test = new HomeTheaterTestDrive.main([]);