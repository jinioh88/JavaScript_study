const landscape = {
    location: [32.111, -103.2221],
};

const { location: [latitude, longitude] }  = landscape;
console.log(latitude);

function displayPhoto({
    title, 
    photographer = 'Anonymous',
    location: [latitude, longitude],
    src: url, 
    ...order}) {
    const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);
    return (`
    ...`);
}