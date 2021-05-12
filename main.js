import Animal, {printName, printLegsCount as printLegs} from './animal.js';

const dog = new Animal('dog', 4);

console.log(dog);

printName(dog);

printLegs(dog);