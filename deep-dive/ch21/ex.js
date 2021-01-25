const str = 'hello';

// 식별자 str는 암묵적으로 생성된 래퍼 객체를 가리킴.
str.name = 'OH';
console.log(str.name); // undefined

const num = 1.5;
console.log(num.toFixed()); // 2
console.log(typeof num, num)    // number, 1.5

console.log(eval('1+2'));

var x = 10; 
function foo () {
    y = 20; // window.y = 20; 
}
foo();
console.log(x + y);  // 30