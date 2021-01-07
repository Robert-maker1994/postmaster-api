const { subscribe } = require('../../Controllers/controller-subscribe');
const router = require('express').Router();


router.post('/', subscribe);

module.exports = router;