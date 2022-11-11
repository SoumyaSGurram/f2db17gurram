var Gems = require('../models/Gems');
// List of all Gems
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
// for a specific Costume. 
exports.Gems_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Gems.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Gems create on POST.
exports.Gems_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Gems();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Gems_type":"goat", "cost":12, "size":"large"}
    document.gems_type = req.body.gems_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
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
// Handle Costume update form on PUT. 
exports.Gems_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Gems.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.gems_type)  
               toUpdate.gems_type = req.body.gems_type; 
        if(req.body.size) toUpdate.size = req.body.size; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
exports.Gems_view_all_Page = async function (req, res) {
    try {
        theGems = await Gems.find();
        res.render('Gems', { title: 'Gems Search Results', results: theGems });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};