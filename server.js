const express = require('express');
require('./database')
const app = express();

app.get('/kfd', (req, res) => {
    res.status(200).send('Hello');
});

app.post('/', (req, res) => {
    res.status(200).send('Your on the post route')
})

app.put('/', (req, res) => {
    res.status(200).json({message: 'Youre on the port route'})
})

app.delete('/', (req, res) => {
    res.status(200).json({message: 'You are on the delete route'})
})

const port = process.env.PORT || 9000;
app.listen(port, () => {console.log(`Server up and running on port ${port}`)})