function Circle(radius) {
    this.radius = radius;
}

// 프로토 타입은 Circle 생성자 함수의 prototype 프로퍼티에 바이딩 되어 있다. 
Circle.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;    
}