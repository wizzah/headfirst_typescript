import { MenuItem } from './MenuItem';
import { PancakeHouseIterator } from './PancakeHouseIterator';

export class PancakeHouseMenu {
    menuItems: Array<MenuItem>;

    constructor() {
        this.menuItems = new Array<MenuItem>();
        this.addItem("K&B's Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99);
        this.addItem("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage", false, 2.99);
        this.addItem("Blueberry pancakes", "Pancakes made with fresh blueberries", true, 3.49);
        this.addItem("Waffles", "Waffles, with your choice of blueberries or strawberries", true, 3.59);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        const menuItem: MenuItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.push(menuItem);
    }

    [Symbol.iterator](): Iterator<MenuItem> {
        return new PancakeHouseIterator(this.menuItems);
    }
}