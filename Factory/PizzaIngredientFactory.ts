import { Dough } from "./Dough";
import { Sauce } from "./Sauce";
import { Veggies } from "./Veggies";
import { Cheese } from "./Cheese";
import { Pepperoni } from "./Pepperoni";
import { Clams } from "./Clams";

export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createVeggies(): string[];
    createPepperoni(): Pepperoni;
    createClam(): Clams;
}