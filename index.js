const express = require('express');
const app = express();
const morgan=require('morgan')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('combined'))

app.get('/api/login', function (req, res) {
    console.log('call received');
    res.json({
         token:'token'
    });
});

app.get('/api/list', function (req, res) {
    console.log('call 2 received');
});


const PORT = process.env.PORT || 4017;
app.listen(PORT, function () {
    console.log(`App started on port ${PORT}`)
   
});