const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host:'localhost',
    user: 'sabe',
    password:'senai123',
    database: 'login'
});

db.connect((error)=>{
    if (error){
        console.log("Erro ao conectar com o banco de dados")
    } else {
        console.log("Conectado aoMySQL")
    }
});

app.use(bodyParser.urlencoded({exended:true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/loin.html')
});

app.get("/cadastro", (req, res) = {
  res.sendFile(__dirname + '/cadatro.html')
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    db.query('SELECT password FROM user WHERE username = ?', [username], (error, results) => {
      if(error){
        res.status(500).send('Erro ao obter usuários')
      } else {
        if(results.length > 0){ // Verifica se há resultados
          const user = results[0]; // Obtém o primeiro resultado
          if(user.password === password){
             res.send(`Login bem-sucedido! Bem-vindo, ${username}.`);
          } else {
            res.status(401).send('Senha incorreta. Tente novamente.');
          }
        } else {
          res.status(401).send('Este usuário não existe');
        }
      }
    })
  });



  app.post('/cadastro', (req, res) => {
    const { username, password } = req.body;
    const confirm = req.body.confirmpassword

     if (password === confirm){
      db.query('insert into user (username, password) values (?, ?)', [username, password], (error, results) => {
        if(error) {
          res.send('Erro ao cadastrar', error)
        } else {
          res.send('Cadastrado com sucesso')
        }
     })
     } else {
      res.send('Senhas não coincidem')
     }
  });


app.listen(port, ()=>{
    console.log(`Servidor rodando no endereço: http://localhost:${port}`)
});

