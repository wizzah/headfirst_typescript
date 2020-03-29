export class Stereo {

    location: string;
    volume: number;

    constructor(location: string) {
        this.location = location;
    }
    
    on(): void {
        console.log("stereo on");
    }

    off(): void {
        console.log("stereo off");
    }

    setCd(): void {
        console.log("CD set");
    }

    setDvd(): void {
        console.log("DVD set");
    }

    setRadio(): void {
        console.log("Radio set");
    }

    setVolume(volume: number): void {
        console.log(`Volume set to ${volume}`);
        this.volume = volume;
    }

    getVolume(): number {
        return this.volume;
    }
}