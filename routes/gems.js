var express = require('express');
const controllersgems_controllers = require('../controllers/controllersgems');
var router = express.Router();

/* GET home page. */
router.get('/', controllersgems_controllers.Gems_view_all_Page ); 

module.exports = router;