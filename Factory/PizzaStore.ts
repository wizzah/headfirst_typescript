import { SimplePizzaFactory } from "./SimplePizzaFactory";
import { Pizza } from "./Pizza";

export abstract class PizzaStore {
    public pizza: Pizza;

    public orderPizza(PizzaType: string): Pizza {
        this.pizza = this.createPizza(PizzaType);
        return this.pizza;
    }

    protected abstract createPizza(PizzaType: string);

    // other methods here
}