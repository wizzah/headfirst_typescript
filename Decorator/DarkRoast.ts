import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "Dark Roast Coffee";
    }

    cost(): number {
        return .99;
    }
}