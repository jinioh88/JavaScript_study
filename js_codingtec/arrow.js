const capitalize = name => {
    return name[0].toUpperCase() + name.slice();
}

const key = () =>  {
    return 'abc123';
}

const greet = (first, last) => {
    return `안녕하세요, ${capitalize(first)} ${capitalize(last)}님`;
}

const formastUser = name => `${capitalize(name)}님이 로그인함.`;

function applyCustomGreeting(name, callback) {
    return callback(capitalize(name));
}

applyCustomGreeting('mark', name => `안녕, ${name}`);