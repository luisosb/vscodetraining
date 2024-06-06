// Create web server
// http://localhost:3000/comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const comments = [];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server
// node comments.js

// Open the browser