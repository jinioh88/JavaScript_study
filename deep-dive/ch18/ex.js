function sum() {
    let res = 0;

    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

function sum2(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}