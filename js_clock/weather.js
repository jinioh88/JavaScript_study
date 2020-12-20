const API_KEY = 'ce630cebc630a9c49a15f7136d255580';
const COORDS = 'coords';

const weather = document.querySelector('.js-weather');
const temperature = document.querySelector('.js-tempo');

function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.dir(json);
        const tempo = json.main.temp;
        const place = json.name;
        const nowweather = json.weather[0].main;
        temperature.innerText = `${place}의 현재 기온 : ${tempo}`;
        weather.innerText = `${place}의 현재 날씨 : ${nowweather}`;
    });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    console.dir(position);

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const coordsObj = {
        lat, 
        lng
    }

    saveCoords(coordsObj);
    getWeather(lat, lng);
}

function handleGeoError() {
    console.log('cannot load geo');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.lat, parsedCoords.lng);
    }
}

function init() {
    loadCoords();
}

init();