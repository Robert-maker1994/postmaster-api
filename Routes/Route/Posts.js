const router = require('express').Router(); 
const { blog } = require('../../Controllers/controller-posts');


router.get('/', blog);

module.exports = router;