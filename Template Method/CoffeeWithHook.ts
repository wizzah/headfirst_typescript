import { CaffeineBeverage } from "./CaffeineBeverage";

export class CoffeeWithHook extends CaffeineBeverage {
    brew(): void {
        console.log('Dripping coffee through filter');
    }

    addCondiments(): void {
        console.log('adding milk and sugar');
    }

    customerWantsCondiments(): boolean {
        // override the hook and provide our own functionality
        // In the book, we would want to get the answer from user input.
        // I'm just going to return true here.
        return true;
    }
}