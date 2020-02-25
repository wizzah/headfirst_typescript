export class ChocolateBoiler {
    private empty: Boolean;
    private boiled: Boolean;

    constructor() {
        this.empty = true;
        this.boiled = false;
    }

    fill(): void {
        if(this.isEmpty()) {
            this.empty = false;
            this.boiled = false;
        }
    }

    drain(): void {
        if(!this.isEmpty() && this.isBoiled()) {
            this.empty = true;
        }
    }

    boil(): void {
        if(!this.isEmpty() && !this.isBoiled()) {
            this.boiled = true;
        }
    }

    isEmpty(): Boolean {
        return this.empty;
    }

    isBoiled(): Boolean {
        return this.boiled;
    }

}