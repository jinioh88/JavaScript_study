function * getCairoTrilogy() {
    yield '궁전 샛길';
    yield '욕망의 궁전';
    yield '설탕 거리';
}

const trilogy = getCairoTrilogy();
trilogy.next();
console.log(trilogy.next());

class FamilyTree {
    constructor() {
        this.family = {
            name: 'Doris',
            child: {
                name: 'Martha',
                child: {
                    name: 'Dyan',
                    child: {
                        name: 'Bea',
                    },
                },
            },
        };
    }
    * [Symbol.iterator]() {
        let node = this.family;
        while (node) {
            yield node.name;
            node = node.child;
        }
    }
}