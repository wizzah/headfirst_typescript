import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { MenuItem } from './MenuItem';
import { DinerMenu } from "./DinerMenu";
import { Menu } from "./Menu";
import { CafeMenu } from "./CafeMenu";

export class Waitress {
    pancakeHouseMenu: PancakeHouseMenu;
    dinerMenu: DinerMenu;
    cafeMenu: CafeMenu;

    constructor(pancakeHouseMenu: PancakeHouseMenu, dinerMenu: DinerMenu, cafeMenu: CafeMenu) {
        this.pancakeHouseMenu = pancakeHouseMenu;
        this.dinerMenu = dinerMenu;
        this.cafeMenu = cafeMenu;
    }

    printMenu(): void {
        console.log('MENU --- BREAKFAST');
        this.printPrintMenu(this.pancakeHouseMenu);
        console.log('\nLUNCH');
        this.printPrintMenu(this.dinerMenu);
        console.log('\nCAFE');
        this.printPrintMenu(this.cafeMenu);
    }

    // "Function overloading with different number of parameters and types with same name is not supported."
    // So this is renamed :)
    printPrintMenu(iterable: Iterable<MenuItem>): void {
        for (let item of iterable) {
            console.log('test', item);
            console.log(item.getName() + ", ");
            console.log(item.getPrice() + " -- ");
            console.log(item.getDescription());
        }
    }
}