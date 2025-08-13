const express = require('express');
const app = express();
const cors = require('cors');
const modelfile = require('./model');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json())


app.get('/',(req,res)=>{
    res.send('backend code')
})

app.post('/signup',async (req,res) => {
    const myemail = req.body.myemail;
    const mypassword = req.body.mypassword;

    const savingformat = {
        myemail:myemail,
        mypassword:mypassword
    }
    console.log(savingformat);

    const checking  = await modelfile.findOne({myemail})
    if (checking) {
        res.json('change the email id and password')
    } else {
        res.json('data added successfully')
        await modelfile.insertMany([savingformat]);
    }

    
})

app.post('/login',async (req,res) => {
    const myemail = req.body.myemail;

    const checking = await modelfile.findOne({myemail})
    if (checking) {
        res.json('you are logged in successfully')
    } else {
        res.json('create the account...')
    }
})
app.listen(10000)