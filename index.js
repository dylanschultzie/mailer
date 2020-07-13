const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/auth/:service', (req, res) => {
  res.send('Auth time! ' + req.params.service);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server started on port:' + PORT);
});
