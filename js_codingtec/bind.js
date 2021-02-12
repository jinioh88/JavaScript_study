function sayMessage() {
    return this.messgae;
}
const alert = {
    message: '위험해!',
};

const sayAlert = sayMessage.bind(alert);

class Validator {
    constructor() {
        this.message = '가 유효하지 않습니다.';
        this.setInvailidMessage = this.setInvailidMessage.bind(this);
    }
    setInvailidMessages(field) {
        return  `${field}${this.message}`;
    }
    setInvailidMessages(...fields) {
        return fields.map(this.setInvailidMessage);
    }
}