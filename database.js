const mongoose = require('mongoose');

const options = {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost:27017/database', options).then(() => {
    console.log('Connection successful');

}).catch((err) => {
    console.log('Connection failed');
    console.log(err)
}) 

const db = mongoose.connection

module.exports = db