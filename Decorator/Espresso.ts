import { Beverage } from "./Beverage";

export class Espresso implements Beverage {

    getDescription(): string {
        return "Espresso";
    }

    cost(): number {
        return 1.99;
    }
}