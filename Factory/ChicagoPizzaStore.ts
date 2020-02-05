import { PizzaStore } from "./PizzaStore";
import { Pizza } from "./Pizza";
import { ChicagoPizzaIngredientFactory } from "./ChicagoPizzaIngredientFactory";
import { CheesePizza } from "./CheesePizza";
import { VeggiePizza } from "./VeggiePizza";
import { ClamPizza } from "./ClamPizza";
import { PepperoniPizza } from "./PepperoniPizza";

export class ChicagoPizzaStore extends PizzaStore {
    protected createPizza(item: string): Pizza {
        let pizza: Pizza = null;
        let ingredientFactory: ChicagoPizzaIngredientFactory = new ChicagoPizzaIngredientFactory();

        if(item === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
            pizza.setName("Chicago Style Cheese Pizza");
        } else if(item === "veggie") {
            pizza = new VeggiePizza(ingredientFactory);
            pizza.setName("Chicago Style Veggie Pizza");
        } else if(item === "clam") {
            pizza = new ClamPizza(ingredientFactory);
            pizza.setName("Chicago Style Clam Pizza");
        } else if(item === "pepperoni") {
            pizza = new PepperoniPizza(ingredientFactory);
            pizza.setName("Chicago Style Pepperoni Pizza");
        }
        return pizza;
    }
}