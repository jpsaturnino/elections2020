const mongoose = require('mongoose');

//Create a schema on mongoDB to Admins
const AdminSchema = new mongoose.Schema({
    email: String, password: String
})

module.exports = mongoose.model('Admin', AdminSchema);