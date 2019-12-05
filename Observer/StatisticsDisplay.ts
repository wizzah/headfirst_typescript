import { Observer } from "./Observer";
import { DisplayElement } from "./DisplayElement";
import { WeatherData } from "./WeatherData";

export class StatisticsDisplay implements Observer, DisplayElement {
    private maxTemp = 0.0;
    private minTemp = 200;
    private tempSum = 0.0;
    private numReadings;
    private weatherData;
    
    constructor(weatherData: WeatherData) {
        this.weatherData = weatherData;
    }

    update(temp, humidity, pressure) {
        this.tempSum += temp;
        this.numReadings++;

        if(temp > this.maxTemp) {
            this.maxTemp = temp;
        }

        if(temp < this.minTemp) {
            this.minTemp = temp;
        }
        this.display();
    }

    display() {
        console.log(`Avg/Max/Min temperature = ${this.tempSum/this.numReadings} / ${this.maxTemp} / ${this.minTemp}`);
    }
}