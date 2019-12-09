import { mock, instance, when, verify } from 'ts-mockito';
import { WeatherData } from '../WeatherData';
import { CurrentConditionsDisplay } from '../CurrentConditionsDisplay';
import { Observer } from '../Observer';
import { ForecastDisplay } from '../ForecastDisplay';
import { StatisticsDisplay } from '../StatisticsDisplay';
import { ConcreteSubject } from '../ConcreteSubject';
import { ConcreteObserver } from '../ConcreteObserver';

// Creating mock
let mockedWeatherData:WeatherData = mock(WeatherData);
let mockedConditions:CurrentConditionsDisplay = mock(CurrentConditionsDisplay);
let mockedForecast:ForecastDisplay = mock(ForecastDisplay);
let mockedStatistics:StatisticsDisplay = mock(StatisticsDisplay);
let mockedSubject:ConcreteSubject = mock(ConcreteSubject);
let mockedObserver:ConcreteObserver = mock(ConcreteObserver);

// Getting instance from mock
let WeatherDataInstance:WeatherData = instance(mockedWeatherData);
let CurrentConditionsInstance:CurrentConditionsDisplay = instance(mockedConditions);
let ForecastInstance:ForecastDisplay = instance(mockedForecast);
let StatisticsInstance:StatisticsDisplay = instance(mockedStatistics);
let SubjectInstance:ConcreteSubject = instance(mockedSubject);
let ObserverInstance:ConcreteObserver = instance(mockedObserver);

WeatherDataInstance.setMeasurements(13, 25, 3);
verify(mockedWeatherData.setMeasurements(13, 25, 3)).called();

CurrentConditionsInstance.update(58, 40, 2);
verify(mockedConditions.update(58, 40, 2)).called();

ForecastInstance.update(33, 2, 1);
verify(mockedForecast.update(33, 2, 1)).called();

StatisticsInstance.update(84, 65, 6);
verify(mockedStatistics.update(84, 65, 6)).called();

// Concrete Observer and Concrete Subject

ObserverInstance.update(1,1,1);
verify(mockedObserver.update(1,1,1)).called();

SubjectInstance.registerObserver(ObserverInstance);
verify(mockedSubject.registerObserver(ObserverInstance)).called();

SubjectInstance.setState(24, 46, 98);
verify(mockedSubject.setState(24, 46, 98)).called();

SubjectInstance.notifyObservers();
verify(mockedSubject.notifyObservers()).called();

SubjectInstance.removeObserver(ObserverInstance);
verify(mockedSubject.removeObserver(ObserverInstance)).called();

SubjectInstance.getState();
verify(mockedSubject.getState()).called();