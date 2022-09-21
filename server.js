const express = require('express');
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static('public'));

// defining routes to use
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Note Taker listening at http://localhost:${PORT}`);
  });

// POST requests
