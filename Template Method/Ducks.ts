export class Duck {
    name: string;
    weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    toString(): string {
        return this.name + " weighs " + this.weight;
    }

    compareTo(obj: Object): number {
        let otherDuck: Duck = obj as Duck;

        if (this.weight < otherDuck.weight) {
            return -1;
        } else if (this.weight === otherDuck.weight) {
            return 0;
        } else {
            return 1;
        }
    }
}
