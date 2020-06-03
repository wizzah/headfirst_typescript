import { Beverage } from "./Beverage";

export class HouseBlend implements Beverage {

    getDescription(): string {
        return "House Blend Coffee";
    }

    cost(): number {
        return .89;
    }
}