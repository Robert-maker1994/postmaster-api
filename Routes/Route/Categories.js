const router = require('express').Router(); 
const { book } = require('../../Controllers/controller-book');
const { cooking } = require('../../Controllers/controller-cooking');
const { endurance } = require('../../Controllers/controller-endurance');
const {featured } = require('../../Controllers/controller-featured');


router.get('/featured', featured );
router.get('/book', book);
router.get('/cooking',  cooking);
router.get('/endurance', endurance)
module.exports = router;