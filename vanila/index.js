var p = function Person(name) {
    this.name = name;
}

p.sayHi = function () {
    return 'Hi my name is $(this.name)';
}

const me = new p('oh');
console.log(me.constructor.sayHi());