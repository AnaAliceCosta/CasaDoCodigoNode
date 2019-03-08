
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("rodando na pasta 3000")
});
app.get('/', (req, resp) => {

    resp.send(
        `
    <html>
        <body>
            CasaDoCodigo
        </body>
    </html>
    `
    );

});
app.get('/livros', (req, resp) => {

    resp.send(
        `
    <html>
        <body>
            livros
        </body>
    </html>
    `
    );

});

// const http = require("http");

// const servidor = http.createServer((req,resp)=> {
//     resp.end(`
//     <html>
//         <body>
//             CasaDoCodigo
//             ${req.url};
//         </body>
//     </html>
//     `);


// });
// servidor.listen(3000);
