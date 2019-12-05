export interface Subject {
    registerObserver(observer): void;
    removeObserver(observer): void;
    notifyObservers(): void;
}