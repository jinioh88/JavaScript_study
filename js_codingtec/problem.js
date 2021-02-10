const item = {
    inventory: 3, 
    price: 3,
    salePrice: 2,
    saleInventory: 0,
};

function getLowersPrice(item) {
    const count = item.inventory;
    let price=  item.price;
    if (item.salePrice) {
        const saleCount = item.saleInventory;
        if (saleCount > 0) {
            price = item.salePrice;
        }
    }

    if (count) {
        return price;
    }

    return 0;
}

function addClick(items) {
    for(var i =0; i < items.length; i++) {
        items[i].onClick = function() {
            return i;
        };
    }
    return items;
}

function generateLink(image, width) {
    const widthInt = parseInt(width, 10);
    return 'https://' + getProvince() + '.' + image + '?width=' + widthInt;
}

const defaults = {
    author: '',
    title: '',
    year: 2021,
    rating: null,
};

const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
};

const updated = Object.assign({}, defaults, book);

const defaultEmployee = {
    name: {
        first: '',
        last: '',
    },
    years: 0,
};
const employee = Object.assign({}, defaultEmployee, {
    name: Object.assign({}, defaultEmployee.name),
});
const employee2 = {
    ...defaults, 
    name: {
        
    }
};

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

let filters = {};
function addFilters(filters, key, value) {
    filters[key] = value;
}
function deleteFilters(filters, key) {
    delete filters[key];
}
function clearFilters(filters) {
    filters = {};
    return filters;
}

const employee = {
    name: 'Eric'
    equipmentTraining: true,
};

function listCerts(employee) {
    if (employee.equipmentTraining) {
        employee.certificate = ['Equipment'];
        delete employee.equipmentTraining;
    }
}
function checkAuthorization() {
    if (employee.equipmentTraining !== true) {
        return '기계를 작동할 권한이 없음';
    }
    return `반갑습니다. ${employee.name} 님`;
}

function getImage(userConfig) {
    let img = 'default.png';
    if (userConfig.images) {
        if (userConfig.images.length) {
            img = userCOnfig.image[0];
        }
    }
    return img;
}

const prices = ['1.0', '2.5'];
const formattedPrices = [];
for (let i = 0; i < prices.length; i++) {
    formattedPrices.push(parseFloat(prices[i]));
}

function convertWeight(weight, ounces, roundTo) {
    const oz = ounces / 16 || 0;
    const total = weight + oz;
    const conversion = total / 2.2;
    const round = roundTo === undefined ? 2 : roundTo;
    return roundToDecimalPlace(conversion, round);
}

import {getTaxInformation} from './taxService';

functino formatPrices(user, {price, location}) {
    const rate = getTaxInformation(localtion);
    const taxes = rate ? `추가세금 $${price * rate}` : `추가 세금`;

    return `${user}님의 합계 금액 : $${taxes}`;
}

const name = {
    first: 'Lemmy',
    last: 'Kilmister',
};

function getName({first, last}) {
    return `${first} ${last}`;
}