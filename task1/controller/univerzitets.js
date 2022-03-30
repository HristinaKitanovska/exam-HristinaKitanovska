const mongoose = require('mongoose');
const Univerzitet = require('../models/universitet');


module.exports = {
    getAll: async (req, res) => {
        const univerzitets = await Univerzitet.find();
        res.render('univerzitets/index', { univerzitets });
    },
    getCreate: async (req, res) => {
        res.render('univerzitets/create');
    },
    postCreate: async (req, res) => {
        await Univerzitet.create(req.body);

        res.redirect('/univerzitets')
    },
    getUpdate: async (req, res) => {
        const univerzitet = await Univerzitet.findById(req.params.id);

        res.render('univerzitets/edit', { univerzitet });
    },
    postUpdate: async (req, res) => {
        await Univerzitet.findByIdAndUpdate(req.params.id, req.body);

        res.redirect('/univerzitets');
    },
    getDeleted: async (req, res) => {
        await Univerzitet.findByIdAndDelete(req.params.id);

        res.status(200).send({});
    }
}