console.log(person1 === person2);  // false

// function add(x, y) {
//     return x + y;
// }

var add = function (x, y) {
    return x, y;
};

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 숫자여야함');
    }

    return 
      x + y;
}

(function () {
    // ...
}());

function repeat(n, f) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}

var logOdds = function (i) {
    if (i%2) console.log(i);
};

repeat(5, logOdds);