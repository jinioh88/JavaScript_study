function foo() {
    console.log("foo's this: ", this); // window
    function bar() {
        console.log(this);  // window
    }
    bar();
}

foo();