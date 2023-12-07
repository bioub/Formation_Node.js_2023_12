const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// permet de parser le json reçu en body de la requete :
app.use(express.json());

// GET / HTTP/1.1
app.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
})

app.get('/hello/:name', (req, res) => {
  res.json({ msg: 'Hello ' + req.params.name });
});

// POST /register HTTP/1.1
app.post('/register', (req, res) => {
  console.log(req.body);
  res.json({ msg: 'Registered' });
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Pour démarrer le serveur en watch mode
// (pour qu'il redémarrer tout seul lorsqu'on modifie un fichier) :
// node --watch 12-express.js (jusqu'à Node 21 compris : expérimental)
// npx nodemon 12-express.js
