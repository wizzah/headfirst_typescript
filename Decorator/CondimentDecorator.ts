import { Beverage } from "./Beverage";

export abstract class CondimentDecorator implements Beverage {
    public abstract getDescription(): string;
    public abstract cost(): number;
}