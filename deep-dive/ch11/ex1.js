const o = {};

// const 키워드를 사용해 선언한 변수에 할당된 원시 값(상수)은 변경할 수 없다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다. 
o.a = 1;
o.a = 2;
console.log(o);

var str = 'string';
str[0] = 'S';
console.log(str);

var person1 = {
    name: 'OH'
};

var person2 = {
    name: 'OH'
};

console.log(person1 === person2);