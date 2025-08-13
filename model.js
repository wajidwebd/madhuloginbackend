const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://dbone:dbone@cluster0.1vljvnr.mongodb.net/madhulogin",{}).then(()=>{
    console.log('mongodb connected');
})

const mongodfieldexports = new mongoose.Schema({
    myemail:String,
    mypassword:String
})

const mongodbfileexport = mongoose.model('collectionname',mongodfieldexports)
module.exports = mongodbfileexport