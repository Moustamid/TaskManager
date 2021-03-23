const express = require('express');
const chalk = require('chalk');

const app = express();

app.use(express.json);

app.post('/users', (req, res) => {
  res.send('<h1>user created</h1>');
  console.log(req.body);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    chalk.hex('#26a65b').bold(`Express Server running on port ${PORT} ...👩‍💻`)
  );
});
