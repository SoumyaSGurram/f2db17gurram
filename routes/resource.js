var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Gems_controller = require('../controllers/controllersgems');
var Gems_controller_views = require('../controllers/controllersgems_views');

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

/* GET detail costume page */ 
router.get('/detail', Gems_controller_views.Gems_view_one_Page); 

/* GET create costume page */ 
router.get('/create', Gems_controller_views.Gems_create_Page); 

/* GET create update page */ 
router.get('/update', Gems_controller_views.Gems_update_Page); 

/* GET delete costume page */ 
router.get('/delete', Gems_controller_views.Gems_delete_Page); 
 
module.exports = router;