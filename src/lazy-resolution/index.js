const typeioc = require('typeioc');

const builder = typeioc.createBuilder();

builder.register('F')
.as((c, h, n) => {
    const a = c.resolve('F', n, h + n);

    return {
        value: h,
        get next() {
            return a();
        }
   };
})
.lazy();

const container = builder.build();
const lazy = container.resolve('F', 0, 1)();

const data = [...Array(10).keys()].reduce((acc) => {
    acc.result.push(acc.lazy.value);
    acc.lazy = acc.lazy.next;
    return acc;
}, { lazy, result: [] });

module.exports = data.result.join(', ')
