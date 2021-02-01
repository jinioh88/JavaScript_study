const colors = ['검정', '검정', '갈색'];
const unique = new Set(colors);
function getUnique(attr) {
    return [...new Set(attr)];
}

function getUniqeColors(dogs) {
    const unique = new Set();
    for (const dog of dogs) {
        unique.add(dog.색상);
    }

    return [...unique];
}