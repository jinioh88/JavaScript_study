var p = function Person(name) {
    this.name = name;
}

p.sayHi = function () {
    return 'Hi my name is $(this.name)';
}

const me = p('OH');

console.log(me.sayHi());
console.log(p.sayHi());