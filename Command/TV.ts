export class TV {

    channel: number;
    volume: number;
    location: string;

    constructor(location: string) {
        this.location = location;
    }

    on(): void {
        console.log("TV on");
    }

    off(): void {
        console.log("TV off");
    }

    setInputChannel(channel: number): void {
        this.channel = channel;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }

    getVolume(): number {
        return this.volume;
    }
}