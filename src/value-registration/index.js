const typeioc = require('typeioc');

const create = (data) => ({
    get value() {
        return data;
    }
});

const builder = typeioc.builder();
builder.register(1).asValue('A');
builder.register(2).asValue('B');
builder.register('service')
.as((c) => {
    const a = create(c.resolve(1)).value;
    const b = create(c.resolve(2)).value;
    return `${a} ${b}`;
});

const container = builder.build();
const service = container.resolve('service');

module.exports = service;
