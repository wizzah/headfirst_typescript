import { mock, instance, when, verify } from 'ts-mockito';
import { WeatherData } from '../WeatherData';
import { CurrentConditionsDisplay } from '../CurrentConditionsDisplay';
import { Observer } from '../Observer';
import { ForecastDisplay } from '../ForecastDisplay';
import { StatisticsDisplay } from '../StatisticsDisplay';

// Creating mock
let mockedWeatherData:WeatherData = mock(WeatherData);
let mockedConditions:CurrentConditionsDisplay = mock(CurrentConditionsDisplay);
let mockedForecast:ForecastDisplay = mock(ForecastDisplay);
let mockedStatistics:StatisticsDisplay = mock(StatisticsDisplay);

// Getting instance from mock
let WeatherDataInstance:WeatherData = instance(mockedWeatherData);
let CurrentConditionsInstance:CurrentConditionsDisplay = instance(mockedConditions);
let ForecastInstance:ForecastDisplay = instance(mockedForecast);
let StatisticsInstance:StatisticsDisplay = instance(mockedStatistics);

WeatherDataInstance.setMeasurements(13, 25, 3);
verify(mockedWeatherData.setMeasurements(13, 25, 3)).called();

CurrentConditionsInstance.update(58, 40, 2);
verify(mockedConditions.update(58, 40, 2)).called();

ForecastInstance.update(33, 2, 1);
verify(mockedForecast.update(33, 2, 1)).called();

StatisticsInstance.update(84, 65, 6);
verify(mockedStatistics.update(84, 65, 6)).called();

// TODO: get the mock interface working:

// Observer is an interface, so set mock function generic type instead of passing type to mock
// let mockedObserver:Observer = mock<Observer>();
// const newObserver:Observer = instance(mockedObserver);

// example from docs:
// let mockedFoo:Foo = mock<FooInterface>(); // instead of mock(FooInterface)
// const foo: SampleGeneric<FooInterface> = instance(mockedFoo);

// WeatherDataInstance.registerObserver(newObserver);
// verify(WeatherDataInstance.registerObserver(newObserver)).called();

// WeatherDataInstance.removeObserver(newObserver);
// verify(WeatherDataInstance.removeObserver(newObserver)).called();