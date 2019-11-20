import { MallardDuck } from './MallardDuck';
import { MiniDuckSimulator } from './MiniDuckSimulator';

const mallard = new MallardDuck();
mallard.swim();
mallard.performQuack();
mallard.performFly();

console.log(" ---- ");
const duckSimulator = new MiniDuckSimulator();
duckSimulator.main();