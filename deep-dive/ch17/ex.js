const person = new Object();
person.name = 'Oh';
person.sayHello = function () {
    console.log('Hi! ' + this.name);
}

console.log(person);
person.sayHello();

function Circle(radius) {
    if (!new.target) {
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = function () {
        return 2*this.radius;
    };
}

const circle1 = new Circle(5);

// 함수는 다양한 방식으로 호출될 수 있다. 
function foo() {
    console.log(this);
}

// 일반적 함수 호출
foo();

const obj = { foo };    // ES6 프로퍼티 축약 표현

// 메서드로서 호출
obj.foo();

// 생성자 함수로서 호출
const inst = new foo();

