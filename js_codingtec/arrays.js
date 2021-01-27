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
