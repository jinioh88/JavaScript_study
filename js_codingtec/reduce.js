const callback = function (collectedValues, item) {
    return [...collectedValues, item];
};

const saying = ['veni', 'vedi', 'veci'];
const initialValue = [];
const copy = saying.reduce(callback, initialValue);


const dogs = [
    {
        name: '맥스',
        size: '소형견',
        type: '보스턴테리어',
        color: '검정색',
    },
    {
        name: '도니',
        size: '대형견',
        type: '레브라도레트리버',
        color: '검정색',
    },
    {
        name: '섀도',
        size: '중형견',
        type: '래브라도레트리버',
        color: '갈색',
    },
];
const colors = dogs.reduce((colors, dog) => {
    if (colors.includes(dog['color'])) {
        return colors;
    }
    return [...colors, dog['color']];
}, []);

const colors = dogs.map(dog => dog['color']);
const colors2 = dogs.reduce((colors, dog) => {
    return [...colors, dog['color']];
}, []);

const filters = dogs.reduce((filters, item) => {
    filters.breed.add(item['type']);
    filters.size.add(item['size']);
    filters.color.add(item['color']);
    return filters;
}, 
{
   breed: new Set(), 
   size: new Set(), 
   color: new Set(), 
});