const express = require('express');
const router = express.Router();
const  cartsCtrl = require('../../controllers/carts')


router.post('/', cartsCtrl.create)

router.delete('/:id', cartsCtrl.deleteCart)

module.exports = router;