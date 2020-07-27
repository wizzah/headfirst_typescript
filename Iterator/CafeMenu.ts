import { MenuItem } from './MenuItem';
import { CafeMenuIterator } from './CafeMenuIterator';

export class CafeMenu implements Iterable<MenuItem> {
    menuItems: Map<string, MenuItem> = new Map<string, MenuItem>();

    constructor() {
        this.addItem("Veggie Burger and Air Fries", "Veggie burger on a whole wheat bun, lettuce, tomato, and fries", true, 3.99);
        this.addItem("Soup of the day", "A cup of the soup of hte day, with a side salad", false, 3.69);
        this.addItem("Burrito", "A large burrito, with whole pinto beans, salsa, guacamole", true, 4.29);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number): void {
        const menuItem: MenuItem = new MenuItem(name, description, vegetarian, price);
        this.menuItems.set(menuItem.getName(), menuItem);
    }

    getItems(): Map<string, MenuItem> {
        return this.menuItems;
    }

    [Symbol.iterator](): Iterator<MenuItem> {
        return new CafeMenuIterator(this.menuItems);
    }
}