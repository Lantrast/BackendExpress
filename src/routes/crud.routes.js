const  Router  = require("express");
const crudController = require('../controllers/crud.controller');

const router = Router();

router.get('/', crudController.getCrud);



module.exports = router;