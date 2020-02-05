import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { Dough } from "./Dough";
import { Sauce } from "./Sauce";
import { Veggies } from "./Veggies";
import { Cheese } from "./Cheese";
import { Pepperoni } from "./Pepperoni";
import { Clams } from "./Clams";

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    createDough(): Dough {
        // return new ThinCrustDough();
        return new Dough();
    }

    createSauce(): Sauce {
        // return new MarinaraSauce();
        return new Sauce();
    }

    createCheese(): Cheese {
        // return new ReggianoCheese();
        return new Cheese();
    }

    createVeggies(): string[] {
        // let veggies: Veggies = [new Garlic(), new ononline(), new Mushroom(), new RedPepper()];
        // return veggies;
        return ["Onion", "Garlic"];
    }

    createPepperoni(): Pepperoni {
        // return new SlicedPepperoni();
        return new Pepperoni();
    }

    createClam(): Clams {
        // return new FreshClams();
        return new Clams();
    }
}