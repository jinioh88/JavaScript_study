var x = 'global';

function foo() {
    var x = 'local';
    console.log(x);
    return x;
}

foo();  // local
console.log(x);  // global

var MYAPP = {};
MYAPP.name = 'Oh';
console.log(MYAPP.name);