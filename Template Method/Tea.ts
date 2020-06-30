import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage{
    prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    brew(): void {
        console.log('Steeping the tea');
    }

    addCondiments(): void {
        console.log('Adding lemon');
    }
}

// Tea test :)
let myTea = new Tea();
myTea.prepareRecipe();