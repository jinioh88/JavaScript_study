function applyDefaults(map, defaults) {
    const copy = new Map([...map]);
    for (const [key, value] of defaults) {
        if (!copy.has(key)) {
            copy.set(key, value);
        }
    }
    return copy;
}

function applyDefaults2(map, defaults) {
    return new Map([...defaults, ...map]);
}