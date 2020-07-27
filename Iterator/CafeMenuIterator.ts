import { MenuItem } from './MenuItem';

export class CafeMenuIterator implements Iterator<MenuItem> {
    items: IterableIterator<[string, MenuItem]>;
    length: number;
    position: number = 0;

    constructor(items: Map<string, MenuItem>) {
        this.length = items.size;
        this.items = items.entries();
    }

    next(): IteratorResult<MenuItem> {
        // get index of the map keys
        const value = this.items.next().value;
        this.position++;

        if (this.length >= this.position) {
            return { done: undefined, value: value[1] };
        } else {
            return { done: true, value: undefined };
        }
    }
}