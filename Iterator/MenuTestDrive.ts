import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { DinerMenu } from "./DinerMenu";
import { Waitress } from "./Waitress";
import { CafeMenu } from "./CafeMenu";

export class MenuTestDrive {
    main(args: Array<string>): void {
        const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu();
        const dinerMenu: DinerMenu = new DinerMenu();
        const cafeMenu: CafeMenu = new CafeMenu();
        const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu, cafeMenu);
        waitress.printMenu();
    }
}

let test = new MenuTestDrive();
test.main([]);