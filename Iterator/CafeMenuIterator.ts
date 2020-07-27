import { MenuItem } from './MenuItem';

export class CafeMenuIterator implements Iterator<[string, MenuItem]> {
    items: Map<string, MenuItem>;
    position: number = 0;

    constructor(items: Map<string, MenuItem>) {
        this.items = items;
    }

    hasNext(): boolean {
        return (this.position >= this.items.size || this.items.keys()[this.position] === null) ? false : true;
    }

    next(): IteratorResult<[string, MenuItem]> {
        // get index of the map keys
        const menuItem: string = this.items.keys()[this.position];
        const menuItemData = this.items.get(menuItem);
        this.position++;
        return { done: !this.hasNext(), value: [menuItem, menuItemData] };
    }
}