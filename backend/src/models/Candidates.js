const mongoose = require('mongoose');

//Create a schema on mongoDB to Candidates
const CandidateSchema = new mongoose.Schema({
    fullName: String, cpf: String, voterID: String, 
    email: String, birth: String, phone: String,
    team: String, address: String, zipCode: String,
    uf: String, num: String, neighborhood: String,
    complement: String, avatarUrl: String 
})

module.exports = mongoose.model('Candidate', CandidateSchema);