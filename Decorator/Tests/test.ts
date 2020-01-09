import { mock, instance, when, verify } from 'ts-mockito';
import { StarbuzzCoffee } from "../StarbuzzCoffee";
import { Espresso } from "../Espresso";
import { Beverage } from '../Beverage';
import { Mocha } from '../Mocha';

// mock
let mockedBeverage:Beverage = mock(Beverage);
let mockedCoffee:StarbuzzCoffee = mock(StarbuzzCoffee);
let mockedEspresso:Espresso = mock(Espresso);
let mockedMocha:Mocha = mock(Mocha);

// Getting instance from mock
let beverageInstance:Beverage = instance(mockedBeverage);
let coffeeInstance:StarbuzzCoffee = instance(mockedCoffee);
let espressoInstance:Espresso = instance(mockedEspresso);
let mochaInstance:Mocha = instance(mockedMocha);

let esp = new Espresso();
let moc = new Mocha(esp);
let moc2 = new Mocha(moc);
// Espresso, mocha, mocha
console.log(moc2.getDescription());

mochaInstance.getDescription();
verify(mockedMocha.getDescription()).called();

beverageInstance.getDescription();
verify(mockedBeverage.getDescription()).called();

coffeeInstance.main();
verify(mockedCoffee.main()).called();

espressoInstance.getDescription();
verify(mockedEspresso.getDescription()).called();