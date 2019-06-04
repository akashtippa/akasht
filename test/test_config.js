const mongoose = require('mongoose'); // requiring our package

mongoose.connect('mongodb://localhost/Mynewdb'); // establishing the connection
mongoose.connection
.once('open', () => console.log('Connection established'))
.on('error', (error) => {
    console.log('Warning : ' + error); 
});