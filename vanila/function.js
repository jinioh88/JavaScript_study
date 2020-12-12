// 함수 리터럴
function add(x, y) {
    return x+y;
}

// 기명 함수 표현식 주의점
const add = function sum(x, y) {
    return x+y;
}

console.log(add(3,4)); // 가능
console.log(sum(4, 5)); // 불가능