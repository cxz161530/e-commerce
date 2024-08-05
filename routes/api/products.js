const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/products');
const multer = require('multer');
const upload = multer();

router.post('/', upload.single('photo'), productsCtrl.create);
router.get('/', productsCtrl.index)
router.get('/:productName', productsCtrl.productBio)

module.exports = router;