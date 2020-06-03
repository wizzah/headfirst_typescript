import { CondimentDecorator } from "./CondimentDecorator";
import { Beverage } from "./Beverage";

export class Mocha implements CondimentDecorator {
    public beverage: Beverage;

    constructor(beverage: Beverage) {
        this.beverage = beverage;
    }

    public getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    public cost(): number {
        return this.beverage.cost() + .20;
    }


}