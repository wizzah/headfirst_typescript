export class Singleton {
    private static uniqueInstance: Singleton;

    private constructor() {}

    static getInstance(): Singleton {
        if(!Singleton.uniqueInstance) {
            Singleton.uniqueInstance = new Singleton();
        }
        return Singleton.uniqueInstance;
    }
}