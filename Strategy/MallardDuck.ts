import { Duck } from "./Duck";
import { Quack } from "./Quack";
import { FlyWithWings } from "./FlyWithWings";

export class MallardDuck extends Duck {

    quackBehavior = new Quack();
    flyBehavior = new FlyWithWings();

    display(): void {
        console.log("I'm a real mallard duck");
    }
}