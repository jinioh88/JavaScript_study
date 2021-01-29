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
const employee = Object.assign({}, defaultEmployee);
console.log(employee);