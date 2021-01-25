const o = {};
// o.[[Prototype]]; // error
o.__proto__;    // Object.prototype

const person = {
    firstName: 'SEJIN',
    lastName: 'OH',

    //getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// setter 호출
person.fullName = 'JINI OH';
// getter 호출
console.log(person.fullName);

const p = {};
Object.defineProperty(person, 'firstName', {
    value: 'SEJIN',
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(person, 'lastName', {
    value: 'OH'
});

function foo2() {
    xx = 10;
}