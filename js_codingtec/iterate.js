const filters = new Map()
    .set('색상', '검정')
    .set('견종', '래브라도레트리버');

function checkFilters(filters) {
    for (const entry of filters) {
        console.log(entry);
    }
}

function srotByKey(a, b) {
    return a[0] > b[0] ? 1 : -1;
}

function getSortedApppliedFilters(filters) {
    const applied = {};
    for (const [key, value] of [...filters].sort(srotByKey)) {
        applied.push(`${key}:${value}`);
    }
    return `선택한 조건은 ${applied.join(',')} 입니다.`
}

function getSortedApppliedFilters(filters) {
    const applied = [...filters]    // 배열로 만들고,
        .sort(srotByKey)    // 배열을 정렬
        .map(([key, value]) => {
            return `${key}:${value}`;
        })
        .join(', ');
    return `선택한 조건은 ${applied} 입니다.`;
}