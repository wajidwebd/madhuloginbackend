const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/madhulogin",{}).then(()=>{
    console.log('mongodb connected');
})

const mongodfieldexports = new mongoose.Schema({
    myemail:String,
    mypassword:String
})

const mongodbfileexport = mongoose.model('collectionname',mongodfieldexports)
module.exports = mongodbfileexport