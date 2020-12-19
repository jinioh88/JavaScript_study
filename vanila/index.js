function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

Person.prototype.name = 'person2';

Person.prototype.getName = function () {
    return this.name;
}
console.dir(Person);
console.log(foo.getName());
console.log(foo.__proto__.getName());
