let permission;
if (title === '과장') {
    permission = ['근로시간', '수당'];
} else {
    permission = ['근로시간'];
}

const permission2 = title === '과장' ? ['근로시간', '수당'] : ['근로시간'];

function getIconPath(icon) {
    const path = icon.path ? icon.path : 'uploads/defalus.png';
    return `https://asserts.foo.com/${path}`;
}
