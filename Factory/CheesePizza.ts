import { Pizza } from "./Pizza";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
export class CheesePizza extends Pizza {
    public ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log(`Preparing ${this.pizzaName}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}