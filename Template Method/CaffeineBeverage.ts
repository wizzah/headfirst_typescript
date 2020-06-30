export abstract class CaffeineBeverage {
    prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        if (this.customerWantsCondiments()) {
            this.addCondiments();
        }
    }

    abstract brew(): void;
    abstract addCondiments(): void;

    boilWater(): void {
        console.log('boiling water');
    }

    pourInCup(): void {
        console.log('pour in cup');
    }

    customerWantsCondiments(): boolean {
        return true;
    }
}