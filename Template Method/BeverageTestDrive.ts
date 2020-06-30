import { CoffeeWithHook } from "./CoffeeWithHook";

export class BeverageTestDrive {
    main(): void {
        let coffeeWithHook: CoffeeWithHook = new CoffeeWithHook();

        console.log('makin the coffee...');
        coffeeWithHook.prepareRecipe();
    }
}

// Test :)
let test: BeverageTestDrive = new BeverageTestDrive();
test.main();