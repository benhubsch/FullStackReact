var express = require('express');
const app = express();
var bodyParser = require('body-parser')

var dbRoutes = require('./routes/databaseAccess.js');

var mongoose = require('mongoose')
mongoose.connection.on('connected', function() {
    console.log('succesfully connected to the database')
})

mongoose.connect(process.env.MONGODB_URI)

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/db', dbRoutes);

app.listen(3000, () => {
    console.log('Server for React Todo App listening on port 3000!')
});
