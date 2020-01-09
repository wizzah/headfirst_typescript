export class Beverage {
    public description: string = "Unknown Beverage";

    public getDescription(): string {
        return this.description;
    }

    public cost(): number {
        return 1.99;
    }
}