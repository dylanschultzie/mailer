const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

require('./services/passport');
require('./routes/authRoutes')(app);
require('./models/User');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server started on port:' + PORT);
});
