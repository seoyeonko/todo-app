const express = require('express');
const app = express();
const PORT = 8000;

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRouter = require('./routes/todo');
app.use('/', todoRouter);

app.get('*', (req, res) => {
  res.send('404 Error!!!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
