import { mock, instance, when, verify } from 'ts-mockito';
import { Singleton } from "../Singleton";
import { ChocolateBoiler } from "../ChocolateBoiler";

// JS has no multi-threading, just an event loop

function testSingleton() {
    let instanceOne = Singleton.getInstance();
    let instanceTwo = Singleton.getInstance();

    if(instanceOne === instanceTwo) {
        console.log("Same instance :)");
    } else {
        console.log("Not the same instance :( ");
    }
}
testSingleton();

// Create mock
let mockedBoilerOne:ChocolateBoiler = mock(ChocolateBoiler);

// Get instance from mock
let boilerInstance:ChocolateBoiler = instance(mockedBoilerOne);

// fill, boil, drain
boilerInstance.fill();
verify(mockedBoilerOne.fill()).once();
boilerInstance.boil();
verify(mockedBoilerOne.boil()).once();
boilerInstance.drain();
verify(mockedBoilerOne.drain()).once();