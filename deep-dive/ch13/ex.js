var y = 1;
function foo() {
    var y= 10;
    bar();
}

function bar() {
    console.log(y);
}

foo();  // 1
bar();  // 1