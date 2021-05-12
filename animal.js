class Animal {
    constructor(name, legsCount) {
        this.name = name;
        this.legsCount = legsCount;
    }
}

function printName(animal){
    console.log(`This animal is: ${animal.name}`);
}

function printLegsCount(animal){
    console.log(`This animal legs count equal: ${animal.legsCount}`);
}

export default Animal;

export {printName, printLegsCount};