const colors = {
    red: '#d102020',
    green: '#182938d',
    blue: '#0e3939'
}

function getBill(item) {
    return {
        name: item.name, 
        due: twoWeeksFromNow(),
        total: calculateToal(item.price);
    };
}
const bill = getBill({
    name: '객실 청소',
    price: 30
});

function displayBill(bill) {
    return `${bill.name} 비용은 ${bill.total} 납부일은 ${bill.due}이다.`;
}