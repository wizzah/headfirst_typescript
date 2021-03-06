import { PizzaStore } from "./PizzaStore";
import { Pizza } from "./Pizza";
import { NYPizzaIngredientFactory } from "./NYPizzaIngredientFactory";
import { CheesePizza } from "./CheesePizza";
import { ClamPizza } from "./ClamPizza";
import { VeggiePizza } from "./VeggiePizza";
import { PepperoniPizza } from "./PepperoniPizza";

export class NYPizzaStore extends PizzaStore {
    protected createPizza(item: string): Pizza {
        let pizza: Pizza = null;
        let ingredientFactory: NYPizzaIngredientFactory = new NYPizzaIngredientFactory();

        if(item === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("New York Style Cheese Pizza");
        } else if(item === "veggie") {
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("New York Style Veggie Pizza");
        } else if(item === "clam") {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("New York Style Clam Pizza");
        } else if(item === "pepperoni") {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("New York Style Pepperoni Pizza");
        }
        return pizza;
    }
}