class LivroDao {
    constructor(db) {
        this._db = db;
    }
    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro)
                        return reject(erro)
                    return resolve(resultados)
                })
        });

    }
    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?,?,?)
            `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],(err)=>{
                    if (err) 
                        return reject( 'nao foi possivel adicionar o livro');
                    resolve();
                }
            

            );
        });
    }

}
module.exports = LivroDao;