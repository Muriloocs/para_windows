//importa os modulos http e express
const http = require('http');
const express = require('express');

//contrói um objeto express
const app = express();

//importa o body-parser
const bodyParser = require('body-parser');
const { read } = require('fs');
app.use(bodyParser.json());

//configura a porta do servidor e coloca em execução
const porta = 3000;
app.set('port', porta);
const server =  http.createServer(app);
server.listen(porta);

//coleção de dados que representa os alunos
let id = 2;
let alunos = [
    {
        id: 1,
        nome: "João",
        fone: "11223344",
        email: "joao@email.com"
    },
    {
        id: 2,
        nome: "Maria",
        fone: "55221133",
        email: "maria@email.com"
    }
];

//tratamento de requisições POST
app.post("/alunos", (req, res, next) => {
    const aluno ={
        id: id+=1,
        nome: req.body.nome,
        fone: req.body.fone,
        email: req.body.email
    };
    alunos.push(aluno);
    res.status(201).json(aluno);
});

//tartamentos de requisições GET
app.get("/alunos", (req, res, next) => {
    res.status(200).json(alunos);
 });

 //tratamento de requisições PUT
 app.put("/alunos", (req, res, next) => {
     alunos.forEach((aluno) => {
         if(aluno.id === req.body.id){
             aluno.fone = req.body.fone;
         }
     });
     res.status(204).end();
 });