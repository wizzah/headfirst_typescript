import { Dough } from "./Dough";
import { Sauce } from "./Sauce";
import { Veggies } from "./Veggies";
import { Cheese } from "./Cheese";
import { Pepperoni } from "./Pepperoni";
import { Clams } from "./Clams";


export abstract class Pizza {
    public pizzaName: string;
    public dough: Dough;
    public sauce: Sauce;
    public veggies: string[];
    public cheese: Cheese;
    public pepperoni: Pepperoni;
    public clam: Clams;

    abstract prepare(): void;

    public bake(): void {
        console.log(`Bake for 25 minutes at 350`);
    }

    public cut(): void {
        console.log(`Cutting the pizza into diagonal slices`);
    }

    public box(): void {
        console.log(`Place pizza in official PizzaStore box`);
    }

    public getName(): string {
        return this.pizzaName;
    }

    public setName(newName: string): void {
        this.pizzaName = newName;
    }
    public toString(): string {
        // print pizza here
        return "";
    }
}