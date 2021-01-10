var done = true;
var message = '';

if (done) message = '완료';
else message = '미완료';

message = done ? '완료' : '미완료';
console.log(message);

var elem = null;
var value = elem && elem.value;

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength();  // 0

// ES6의 매개변수의 기본값 설정
function getStringLen(str = '') {
    return str.length;
}

var elem = null;
var value = elem?.value;
console.log(value);

var str = '';

var length = str && str.length;  // ''
var len2 = str?.length; // 0

var foo = '' || 'default string'; // ''
var foo2 = '' ?? 'default string'; // default string

const person = {
    firstName: 'OH',
    sayHi() {
        console.log('hi' + this.firstName);
    }
};

person.age = 30;
console.log(person);

var obj = {};
var key = 'hello';

obj[key] = 'world'; // es5 방식
var obj = { [key]: 'world' }; // es6 방식

const prefix = 'prop';
let i = 0;

const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
};
