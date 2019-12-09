import { Observer } from "./Observer";
import { DisplayElement } from "./DisplayElement";

export class ConcreteObserver implements Observer, DisplayElement {
    private temperature;
    private humidity;
    private pressure;
    private concreteSubject;

    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    display() {
        console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity.`);
    }
}