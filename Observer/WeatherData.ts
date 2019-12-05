import { Subject } from "./Subject";
import { Observer } from "./Observer";

export class WeatherData implements Subject {
    private observers;
    private temperature;
    private humidity;
    private pressure;

    constructor() {
        this.observers = [];
    }

    registerObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this.observers = this.observers.filter(element => {
            return element != observer;
        })
    }

    notifyObservers() {
        this.observers.forEach(observer => {
            observer.update(this.temperature, this.humidity, this.pressure);
        })
    }

    measurementsChanged() {
        this.notifyObservers();
    }
    
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}