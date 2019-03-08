module.exports = app => {
    app.get('/', (req, resp) => {

        resp.send(
            `
        <html>
            <body>
                <h1>Casa Do Código</h1>
            </body>
        </html>
        `
        );

    });
    app.get('/livros', (req, resp) => {

        resp.marko(
            require('../views/livros/lista/lista.marko')
        );

    });
};