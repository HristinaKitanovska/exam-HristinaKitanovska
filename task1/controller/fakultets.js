const Fakultet = require('../models/fakultet');
const Univerzitet = require('../models/universitet');

module.exports = {
    getAll: async (req, res) => {
        const fakultets = await Fakultet.find().populate('univerzitet')
        res.render('fakultets/index', {fakultets});
    },
    getCreate: async (req, res) => {
        const univerzitets = await Univerzitet.find();

        res.render('fakultets/create', { univerzitets });
    },
    postCreate: async (req, res) => {
        const faklutet = await Fakultet.create(req.body);
        
        res.redirect('/fakultets');
    },
    getUpdate: async (req, res) => {
        const fakultet = await Fakultet.findById(req.params.id).populate('univerzitet');
        const univerzitets = await Univerzitet.find();

        res.render('fakultets/edit', { fakultet, univerzitets });
    },
    postUpdate: async (req, res) => {

        await Fakultet.findByIdAndUpdate(req.params.id, req.body);

        res.redirect('/fakultets');
    },
    getDeleted: async (req, res) => {
        await Fakultet.findByIdAndDelete(req.params.id);
        res.send({})
    }

}