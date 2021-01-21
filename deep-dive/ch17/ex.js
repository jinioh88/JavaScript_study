const person = new Object();
person.name = 'Oh';
person.sayHello = function () {
    console.log('Hi! ' + this.name);
}

console.log(person);
person.sayHello();