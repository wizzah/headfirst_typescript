export class Light {

    opacity: number;

    constructor(location: string) {
        console.log(location + " light created");
    }

    on(): void {
        console.log("Light on");
    }

    off(): void {
        console.log("Light off");
    }

    dim(dim: number): void {
        console.log("dim light to " + dim);
        this.opacity = dim;
    }
}