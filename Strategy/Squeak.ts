import { QuackBehavior } from "./quackBehavior";

export class Squeak implements QuackBehavior {
    quack(): void {
        console.log("Squeak");
    }
}