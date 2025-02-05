const express = require('express');
// If you need body-parser explicitly; otherwise, use express.json()
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, your Express server is running!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
