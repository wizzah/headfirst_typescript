export class HotTub {

    temperature: number;

    on(): void {
        console.log("hottub on");
    }

    off(): void {
        console.log("hottub off");
    }

    circulate(): void {
        console.log("hottub ...circulate?");
    }

    jetsOn(): void {
        console.log("hottub jets on");
    }

    jetsOff(): void {
        console.log("hottub jets off");
    }

    setTemperature(temp: number): void {
        this.temperature = temp;
    }

    getTemperature(): number {
        return this.temperature;
    }
}