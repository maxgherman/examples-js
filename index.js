const { createExampleElement } = require('./src/scaffold')
const examples = require('./src/all')

const root = document.getElementById('root');

examples.reduce((acc, curr, index) => {
    acc.appendChild(createExampleElement(index, curr.name, curr.value))
    return acc
}, root)