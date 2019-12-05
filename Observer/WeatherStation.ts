import { WeatherData } from "./WeatherData";
import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";

export class WeatherStation {
    main(): void {
        const weatherData = new WeatherData();
        const currentDisplay = new CurrentConditionsDisplay(weatherData);
        weatherData.setMeasurements(80, 65, 30.4);
    }
}