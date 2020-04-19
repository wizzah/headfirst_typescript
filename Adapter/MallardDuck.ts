import { Duck } from "./Duck";

export class MallardDuck implements Duck {
    quack(): void {
        console.log("Quack");
    }
    fly(): void {
        console.log("Fly");
    }
}