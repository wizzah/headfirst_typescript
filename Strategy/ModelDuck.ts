import { Duck } from "./Duck";
import { FlyNoWay } from "./FlyNoWay";

export class ModelDuck extends Duck {
    flyBehavior = new FlyNoWay();

    display(): void {
        console.log("I'm a model duck");
    }
}