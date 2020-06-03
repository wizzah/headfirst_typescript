import { Beverage } from "./Beverage";

export class Decaf implements Beverage {

    getDescription(): string {
        return "Decaf Coffee";
    }

    cost(): number {
        return 1.05;
    }
}