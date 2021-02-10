const team = [
    "Joe",
    "Dyan",
    "Bea",
    "Theo",
];

console.log(...team.slice(0,1));
console.log(team);

function alphabetizeTeam(team) {
    return [...team].sort();
}

function displayName(team) {
    return team.includes('Joe2');
}

const book = ['Reasons and Persons', 'Derek Parfit', 19.99];
function formatBook(title, author, price) {
    return `${title} by ${author} $${price}`;
}
formatBook(...book);

const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washington',
};

const getName = ({first, last}) => `${first} ${last}`;
const getFullName =({first, last}) => ({fullName: `${first} ${last}`,
location: `${city}, ${state}`,
});

const discounter = discount => {
    return price => {
        return price * (1 - discount);
    };
}

const tenPercentOff = discounter(0.1);
tenPercentOff(100);

// 위 코드와 같은 의미다.
discounter(0.1)(100);