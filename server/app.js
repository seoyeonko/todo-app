const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const todoRouter = require('./routes/todo');
app.use('/api', todoRouter); // 기본주소: localhost:PORT/api

app.get('*', (req, res) => {
  res.send('404 Error!!!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
