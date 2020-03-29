export class CeilingFan {
    static HIGH: number = 3;
    static MEDIUM: number = 2;
    static LOW: number = 1;
    static OFF: number = 0;
    location: string;
    speed: number;

    constructor(location: string) {
        this.location = location;
        this.speed = CeilingFan.OFF;
    }

    high(): void {
        this.speed = CeilingFan.HIGH;
        console.log(this.location + " ceiling fan is set to high");
    }

    medium(): void {
        this.speed = CeilingFan.MEDIUM;
        console.log(this.location + " ceiling fan is set to medium");
    }

    low(): void {
        this.speed = CeilingFan.LOW;
        console.log(this.location + " ceiling fan is set to low");
    }

    off(): void {
        this.speed = CeilingFan.OFF;
        console.log(this.location + " ceiling fan is off");
    }

    getSpeed(): number {
        return this.speed;
    }

}