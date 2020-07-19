import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { MenuItem } from './MenuItem';
import { DinerMenu } from "./DinerMenu";

export class Waitress {
    pancakeHouseMenu: PancakeHouseMenu;
    dinerMenu: DinerMenu;

    constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
    }

    printMenu(): void {
        const pancakeIterator: Iterator<MenuItem> = this.pancakeHouseMenu.createIterator();
        const dinerIterator: Iterator<MenuItem> = this.dinerMenu.createIterator();

        console.log('MENU --- BREAKFAST');
        this.printPrintMenu(pancakeIterator);
        console.log('\nLUNCH');
        this.printPrintMenu(dinerIterator);
    }

    // "Function overloading with different number of parameters and types with same name is not supported."
    // So this is renamed :)
    printPrintMenu(iterator): void {
        while (iterator.hasNext()) {
            const menuItem: IteratorResult<MenuItem> = iterator.next();
            console.log(menuItem.value.getName() + ", ");
            console.log(menuItem.value.getPrice() + " -- ");
            console.log(menuItem.value.getDescription());
        }
    }
}