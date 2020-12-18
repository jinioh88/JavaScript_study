var value = "val1";

function frintValue() {
    return value;
}

function printFunc(func) {
    var value = "val2";
    console.log(func());
}

printFunc(frintValue);