import { Duck } from "./Ducks";

export class DuckSortTestDrive {
    main(): void {
        let test = new Duck("F", 0);
        let ducks: Duck[] = [
            new Duck("Daffy", 8),
            new Duck("Dewey", 2),
            new Duck("Howard", 7),
            new Duck("Louie", 2),
            new Duck("Huey", 10),
        ];

        console.log('before sortin ducks', ducks);
        ducks.sort((n1, n2) => {
            return n1.compareTo(n2);
        });
        console.log('after sortin ducks', ducks);
    }
}

let duckTest = new DuckSortTestDrive();
duckTest.main();