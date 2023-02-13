module.exports = async function(app, opts) {
    app.get('/test', async function (res, reply) {
        return 'test show';
    })
}