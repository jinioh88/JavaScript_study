const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    location: [32.7777, -102.1112],
}

const region = {
    city: 'Hobbs',
    country: 'Lea',
    state: {
        name: 'New Mexico',
        abbreviation: 'NW',
    },
}

function getCityState(location, ...details) {
    const {city, state} = determineCityANdState(location);
    return {
        city, 
        state: state.abbreviation,
        ...details,
    };
}