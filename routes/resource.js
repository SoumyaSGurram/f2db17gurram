var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Gems_controller = require('../controllers/controllersgems');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Gems ROUTES ///
// POST request for creating a Gems.
router.post('/Gems', Gems_controller.Gems_create_post);
// DELETE request to delete Gems.
router.delete('/Gems/:id', Gems_controller.Gems_delete);
// PUT request to update Gems.
router.put('/Gems/:id', Gems_controller.Gems_update_put);
// GET request for one Gems.
router.get('/Gems/:id', Gems_controller.Gems_detail);
// GET request for list of all Gems items.
router.get('/Gems', Gems_controller.Gems_list);
module.exports = router;