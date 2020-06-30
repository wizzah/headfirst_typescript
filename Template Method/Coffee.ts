import { CaffeineBeverage } from "./CaffeineBeverage";

export class Coffee extends CaffeineBeverage{

    // This is the template method
    prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    brew(): void {
        console.log('Dripping coffee through filter');
    }

    addCondiments(): void {
        console.log('adding sugar and milk');
    }
}