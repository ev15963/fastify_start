const Test = require('./Test');
const fastify = require('fastify')({ logger: true });
console.log(`index.jdds in`)
module.exports = {
    // Test,
    initialize: (fastify) => {
        fastify.get('/test', Test);
    },
};
