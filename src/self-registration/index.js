const typeioc = require('typeioc');

class A {
    get name() {
        return 'A';
    }
}

class B {

    constructor(a) {
        this.a = a;
    }

    get name() {
        return `${this.a.name} B`;
    }
}

const builder = typeioc.createBuilder();
builder.register(A).asSelf();
builder.register(B).asSelf(A);


const container = builder.build();
const result = container.resolve(B);

module.exports = result.name;
