function Coupon(price, expiration) {
    this.price = price;
    this.expiration = expiration || `2주`;
}
const coupon = new Coupon(5, '2개월');
Coupon.prototype.getExpirationMessage = function() {return `11일 후 만료됨`;};
coupon.getExpirationMessage();