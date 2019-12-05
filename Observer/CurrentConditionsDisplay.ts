import { Observer } from './Observer';
import { DisplayElement } from './DisplayElement';

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature;
    private humidity;
    private weatherData;

    constructor(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display() {
        console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity}% humidity.`);
    }
}