const cart =[
    {
        name: 'The Foundation Trioloy',
        price: 19.99,
        discount: false,
    },
    {
        name: 'Godel, Escher, Bach',
        price: 15.99,
        discount: false,
    },
    {
        name: 'Red Mars',
        price: 5.99,
        discount: true,
    },
];
const reward = {
    name: 'Guide to Science Fiction',
    discount: true,
    price: 0,
};

function addFreeGift(cart) {
    if (cart.length > 2) {
        return [...cart, reward];
    }
    return cart;
}

function summarizeCart(cart) {
    const discountable = cart.filter(item => item.discount);
    if (discountable.length > 1) {
        return {
            error: '할인 상품은 하나만 주문할 수 있습니다.',
        };
    }
    const cartWithReward = addFreeGift(cart);
    return {
        discounts: discountable.length,
        items: cartWithReward.length,
        cart: cartWithReward,
    };
}

const titles = ['m', 'w'];
const lastTitles = ['t', ...titles];
const firstTitles = [...titles, 't'];
const copied = [...titles];
console.log(lastTitles); 
console.log(firstTitles); 
console.log(copied);
