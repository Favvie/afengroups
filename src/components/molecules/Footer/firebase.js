const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));

const { email} = req.body;


const data ={
    members: [
        {
            email_address: email,
            status: 'subscribed'
        }
    ]
}

const postData = JSON.stringify(data);

const options = {
    url: 'https//us5.admin.mailchimp.com/lists/7fb9fc4a32',
    method: 'POST',
    headers: {
        Authorization: 'auth db3c976ddf5686dad5bae5e4da07ccdd-us5'
    },
    body: postData
};


const app = express();
const app = request();
const app = path();

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log('Server started on ${PORT}'));

