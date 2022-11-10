var Gems = require('../models/Gems');
// List of all Gemss
exports.Gems_list = async function (req, res) {
    try {
        theGems = await Gems.find();
        res.send(theGems);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Gems.
exports.Gems_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Gems detail: ' + req.params.id);
};
// Handle Gems create on POST.
exports.Gems_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Gems();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Gems_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.duration = req.body.duration;
    document.director = req.body.director;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Gems delete form on DELETE.
exports.Gems_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Gems delete DELETE ' + req.params.id);
};
// Handle Gems update form on PUT.
exports.Gems_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Gems update PUT' + req.params.id);
};
exports.flim_view_all_Page = async function (req, res) {
    try {
        theGemss = await Gems.find();
        res.render('Gemss', { title: 'Gems Search Results', results: theGemss });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};