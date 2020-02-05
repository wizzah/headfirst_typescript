import { NYPizzaStore } from "../NYPizzaStore";
import { PizzaStore } from "../PizzaStore";
import { ChicagoPizzaStore } from "../ChicagoPizzaStore";
import { Pizza } from "../Pizza";

export class PizzaTestDrive {

    public static main(args: string[]): void {
        let nyStore: PizzaStore = new NYPizzaStore();
        let chicagoStore: PizzaStore = new ChicagoPizzaStore();

        let pizzaType: Pizza = nyStore.orderPizza("cheese");
        console.log(`Ethan ordered a ${pizzaType.getName()} \n`);

        pizzaType = chicagoStore.orderPizza("cheese");
        console.log(`Joel ordered a ${pizzaType.getName()} \n`);
    }
}