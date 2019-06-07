const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
res.send('Hello World!')
})

app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})


// GET method route
app.get('/', function (req, res) {
    res.send('Contestando una peticion por GET');
  });
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('Contestando una peticion por POST');
  });

  // PUT method route
app.put('/', function (req, res) {
    res.send('Contestando una peticion por PUT');
  });
  
  // DELETE method route
  app.delete('/', function (req, res) {
    res.send('Contestando una peticion por DELETE');
  });