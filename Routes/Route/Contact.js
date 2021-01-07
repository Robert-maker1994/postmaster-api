const router = require('express').Router(); 

const { contact } = require('../../Controllers/controller-contact');


router.post('/',  contact );

module.exports = router;