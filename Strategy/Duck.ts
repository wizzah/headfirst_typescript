import { QuackBehavior } from './quackBehavior';
import { FlyBehavior } from './flyBehavior';
import { Quack } from './Quack';

export abstract class Duck {

    quackBehavior: QuackBehavior;
    flyBehavior: FlyBehavior;

    performFly(): void {
        this.flyBehavior.fly();
    }

    performQuack(): void {
        this.quackBehavior.quack();
    }

    setFlyBehavior(fb: FlyBehavior) {
        this.flyBehavior = fb;
    }

    setQuackBehavior(qb: QuackBehavior) {
        this.quackBehavior = qb;
    }

    swim(): void {
        console.log("All ducks float, even decoys!");
    }

}

// moved these into other files

// interface FlyBehavior {
//     fly(): void;
// }

// interface QuackBehavior {
//     quack(): void;
// }