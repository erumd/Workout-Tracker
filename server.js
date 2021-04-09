const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
var path = require('path');

const PORT = process.env.PORT || 3000;
const db = require('./models/workout');

const app = express();
app.use(logger('dev')); //with morgan

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use(require('./routes/api.js'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//routes to send files to the html
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + `/public/html/index.html`));
// });

// routes
app.use(require('./routes/api.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
