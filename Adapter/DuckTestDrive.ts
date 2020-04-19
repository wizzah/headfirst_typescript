import { MallardDuck } from "./MallardDuck";
import { WildTurkey } from "./WildTurkey";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { Duck } from "./Duck";

export class DuckTestDrive {

    static main(args: String[]): void {
        let duck: MallardDuck = new MallardDuck();
        let turkey: WildTurkey = new WildTurkey();
        let turkeyAdapter: Duck = new TurkeyAdapter(turkey);

        console.log("The turkey says...");
        turkey.gobble();
        turkey.fly();

        console.log("\nDuck says...");
        this.testDuck(duck);

        console.log("\nTurkeyAdapter says...");
        this.testDuck(turkeyAdapter);
    }

    static testDuck(duck: Duck): void {
        duck.fly();
        duck.quack();
    }
}

let test = DuckTestDrive.main([]);