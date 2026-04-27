const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res, next) {
  res.json({ message: 'Hello World!' });
});

app.listen(port, function() {
  console.log(`Server is running on port ${port}`);
});