import { Espresso } from "./Espresso";
import { DarkRoast } from "./DarkRoast";
import { Mocha } from "./Mocha";
import { HouseBlend } from "./HouseBlend";

export class StarbuzzCoffee {
    public beverage;
    public beverage2;
    public beverage3;
    
    main(): void {
        this.beverage = new Espresso();
        console.log(this.beverage.getDescription() + " $" + this.beverage.cost());

        this.beverage2 = new DarkRoast();
        this.beverage2 = new Mocha(this.beverage2);
        this.beverage2 = new Mocha(this.beverage2);
        this.beverage2 = new Mocha(this.beverage2);
        console.log(this.beverage2.getDescription() + " $" + this.beverage2.cost());

        this.beverage3 = new HouseBlend();
        console.log(this.beverage3.getDescription() + " $" + this.beverage3.cost());
    }
}