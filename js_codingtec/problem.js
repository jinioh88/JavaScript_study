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

console.log(getLowersPrice(item));