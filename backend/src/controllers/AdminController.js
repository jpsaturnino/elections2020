const Admin = require('../models/Admin');

module.exports = {
    
    async login(request, response) {
        const { email } = request.body;

        const admin = await Admin.findOne({
            email : email
        });

        if(admin){
            if(!admin.password.localeCompare(request.body.password))
                return response.json(admin);
            else
                return response.send(false)
        }else
            return response.send(false)
    }
}