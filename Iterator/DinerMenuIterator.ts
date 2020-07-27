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

    remove(): void {
        if (this.position <= 0) {
            throw new Error("You can't remove an item until you've done at least one next()");
        }
        if (this.items[this.position - 1] != null) {
            for (var i = this.position - 1; i < (this.items.length - 1); i++) {
                this.items[i] = this.items[i+1];
            }
            this.items.splice(this.items.length - 1, 1);
        }
    }
}