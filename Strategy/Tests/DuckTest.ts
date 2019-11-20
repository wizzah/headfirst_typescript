import { MallardDuck } from '../MallardDuck';
import { mock, instance, when, verify } from 'ts-mockito';

// Creating mock
let mockedDuck:MallardDuck = mock(MallardDuck);
 
// Getting instance from mock
let DuckInstance:MallardDuck = instance(mockedDuck);
 
// Using instance in source code
DuckInstance.display();
DuckInstance.swim();
 
// Explicit, readable verification
verify(mockedDuck.display()).called();
verify(mockedDuck.swim()).called();

// test an error
when(mockedDuck.swim()).thenThrow(new Error('Fatal Error'));
 
let foo:MallardDuck = instance(mockedDuck);
try {
    foo.swim();
} catch (error) {
    console.log(error); // 'fatal error'
}