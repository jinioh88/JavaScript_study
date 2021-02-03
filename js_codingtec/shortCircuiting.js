function getIconPath(icon) {
    const path = icon.path || 'uploads/default.png';
    return `https://asserts.foo.com/${path}`;
}

function getImage(userConfig) {
    if (userConfig.images && userConfig.images.length > 0) {
        return userConfig.images[0];
    }
    return 'default.png';
}