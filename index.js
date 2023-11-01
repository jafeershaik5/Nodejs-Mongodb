const express = require('express');
const app = express();
const cors = require('cors');
const { connectToDb } = require('./Utils/db')

const port = 3000;

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send('ok')
});

//Mongodb connection

connectToDb()
    .then(() => {
        app.use('/', require('./Routes'));

        app.listen(port, () => {
            console.log(`Server listening at port: ${port}`)
        })
    })
    .catch(error => {
        console.log("Error in connecting Database ", error);
        process.exit(1);
    })