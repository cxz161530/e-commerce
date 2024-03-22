const express = require('express');
const router = express.Router();
const  cartsCtrl = require('../../controllers/carts')

router.get ('/', cartsCtrl.show)
router.post('/', cartsCtrl.create)

router.delete('/:id', cartsCtrl.deleteCart)

module.exports = router;