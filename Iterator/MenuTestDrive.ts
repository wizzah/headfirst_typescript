import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { DinerMenu } from "./DinerMenu";
import { Waitress } from "./Waitress";

export class MenuTestDrive {
    main(args: Array<string>): void {
        const pancakeHouseMenu: PancakeHouseMenu = new PancakeHouseMenu();
        const dinerMenu: DinerMenu = new DinerMenu();
        const waitress: Waitress = new Waitress(pancakeHouseMenu, dinerMenu);
        waitress.printMenu();
    }
}

let test = new MenuTestDrive();
test.main([]);