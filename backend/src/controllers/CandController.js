const Candidates = require('../models/Candidates');

module.exports = {
    
    //Update candidate data
    async edit(request, response) {
        const { cpf, voterID, fullName,
            birth, phone, email,
            team, address, zipCode,
            city, uf, num,
            neighborhood, complement, avatarUrl
        } = request.body;
        const candidate = await Candidates.updateMany({ id }, {
            cpf, voterID, fullName,
            birth, phone, email,
            team, address, zipCode,
            city, uf, num,
            neighborhood, complement, avatarUrl
        });
        return response.json(candidate);
    },

    //Remove a candidate by their ID
    async remove(request, response) {
        const { id } = request.params;
        const candidate = await Candidates.deleteMany({ id });
        return response.json(candidate);
    },

    //List all candidates from DB
    async list(request, response) {
        const candidate = await Candidates.find();
        return response.json(candidate);
    },

    //Save a new candidate to the DB
    async save(request, response) {
        const { cpf, voterID, fullName,
            birth, phone, email,
            team, address, zipCode,
            city, uf, num,
            neighborhood, complement, avatarUrl
        } = request.body;

        let candidate = await Candidates.findOne({ cpf });
        if (!candidate)
            candidate = await Candidates.create({
                cpf, voterID, fullName,
                birth, phone, email,
                team, address, zipCode,
                city, uf, num,
                neighborhood, complement, avatarUrl
            });

        return response.json(candidate);
    }
}