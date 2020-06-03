import { Beverage } from "./Beverage";

export class DarkRoast implements Beverage {

    getDescription(): string {
        return "Dark Roast Coffee";
    };

    cost(): number {
        return .99;
    }
}