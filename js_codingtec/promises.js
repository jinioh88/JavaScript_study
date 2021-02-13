

function failUserPreference() {
    const finder = new Promise((resolve, reject) => {
        reject({
            type: '접근 거부됨',
        });
    });
    return finder;
}



failUserPreference()
    .then(preferences => {
        console.log(preferences.theme);
    })
    .catch(error => {
        console.error('실패: ${error.type}');
    });

function getUserPreferences() {
    const preferences = new Promise((resolve, reject) => {
        resolve({
            theme: 'dusk',
        });
    });
    return preferences;
}

getUserPreferences()
    .then(preference => {
        return getMusic(preference.theme);
    })
    .then(music => {
        console.log(music.album);
    })
    .catch(e => {
        console.log(e);
    });

function getMusic(theme) {
    if (theme === 'dusk') {
        return Promise.resolve({
            album: 'music for airports',
        });
    }
    return Promise.resolve({
        album: 'kind of blue',
    });
}