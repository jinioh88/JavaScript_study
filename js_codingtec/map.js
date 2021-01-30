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

let filters = new Map(
    [
        ['size', '중형견'],
        ['type', '래브라도레트리버'],
        ['color', '갈색'],
    ]
);
filters.get('size');
filters.delete('color');
filters.clear();
