const db = require('../../config/database');
const LivroDao = require('../infra/LivroDao');
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
        const livroDao = new LivroDao(db);
        livroDao.lista()
            .then(
                livros =>
                    resp.marko(
                        require('../views/livros/lista/lista.marko'),
                        {
                            livros: livros
                        }
                    ))
            .catch(erro => console.log(erro));

    });

    app.post('/livros',(req,resp)=>{
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));

    });

    app.put('/livros',(req,resp)=>{
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));

    });
    app.delete('/livros/:id',(req,resp)=>{
        const id = req.params.id;
        const livroDao = new LivroDao(db)
        livroDao.remove(id)
            .then(()=> resp.status(200).end())
            .catch(erro => console.log(erro))

    });


    app.get('/livros/form',(req,resp)=>{
        resp.marko(
            require('../views/livros/form/form.marko'),{ livro: {} }
        )
    });
    app.get('/livros/form/:id', function(req, resp) {
        const id = req.params.id;
        const livroDao = new LivroDao(db);
    
        livroDao.buscaPorId(id)
            .then(livro => 
                resp.marko(
                    require('../views/livros/form/form.marko'),
                    { livro: livro }
                )
            )
            .catch(erro => console.log(erro));
    
    });


};