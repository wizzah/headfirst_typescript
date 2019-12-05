export interface Observer {
    update(temp, humidity, pressure): void;
}