import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";
import { FlyRocketPowered } from "./FlyRocketPowered";

export class MiniDuckSimulator {
    main(): void {
        const mallard = new MallardDuck();
        mallard.performQuack();
        mallard.performFly();

        const model = new ModelDuck();
        model.performFly();
        model.setFlyBehavior(new FlyRocketPowered());
        model.performFly();
    }
}

// const test = new MiniDuckSimulator();
// test.main();