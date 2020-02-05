export class SimplePizzaFactory {
    public pizza: string;

    public createPizza(PizzaType: string): string {

        if(PizzaType === "cheese") {
            // this.pizza = new CheesePizza();
        } else if (PizzaType === "pepperoni") {
            // this.pizza = new PepperoniPizza();
        } else if(PizzaType === "clam") {
            // this.pizza = new ClamPizza();
        } else if(PizzaType === "veggie") {
            // this.pizza = new VeggiePizza();
        }
        return this.pizza;
    }
}