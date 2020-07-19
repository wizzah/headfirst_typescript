import { MenuItem } from './MenuItem';

export class DinerMenuIterator implements Iterator<MenuItem> {
    items: Array<MenuItem>;
    position: number = 0;

    constructor(items: Array<MenuItem>) {
        this.items = items;
    }

    hasNext(): boolean {
        return (this.position >= this.items.length || this.items[this.position] === null) ? false : true;
    }

    next(): IteratorResult<MenuItem> {
        const menuItem: MenuItem = this.items[this.position];
        this.position++;
        return { done: !this.hasNext(), value: menuItem };
    }
}