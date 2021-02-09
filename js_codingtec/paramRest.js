function getArguments(...args) {
    return args;
}
getArguments('Bloomsday', 'Jun 16');

function validateCharacter(max, ...items) {
    return items.every(item => item.length < max);
}

function applyChanges(...args) {
    updateAccount(...args);
    closeModal();
}