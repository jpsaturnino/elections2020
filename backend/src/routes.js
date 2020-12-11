const { Router } = require('express');
const routes = Router();
const CandController = require('./controllers/CandController');

const multer = require('multer');
const path = require('path');

const AdminController = require('./controllers/AdminController');
routes.post('/admin/login', AdminController.login);

routes.post('/candidate', CandController.save);
routes.get('/candidate', CandController.list);
routes.delete('/candidate/:cpf', CandController.remove);
routes.put('/candidate', CandController.edit);

//Define destination and file name
const storage = multer.diskStorage({
    destination: "../frontend/public/img",
    filename: function (req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

//Upload the selected image from the submitted form
const upload = multer({
    storage: storage,
    limits: { fileSize: 900000 },
}).single('avatar');

//Calls the upload function and give a status response
routes.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err){
            console.log(JSON.stringify(err));
            res.status(400).send('upload da imagem falhou');
        } else 
            res.send(res.req.file.filename);
    });
});

module.exports = routes;