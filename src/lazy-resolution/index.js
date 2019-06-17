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

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc) => {
    acc.result.push(acc.lazy.value);
    acc.lazy = acc.lazy.next;
    return acc;
}, { lazy, result: [] });

module.exports = data.result.join(', ')
