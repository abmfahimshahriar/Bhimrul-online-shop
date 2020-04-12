const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
const isAd = require('../middleware/is-admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, isAd, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, isAd, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth, isAd,
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, isAd, adminController.getEditProduct);

router.post(
  '/edit-product',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('price').isFloat(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth, isAd,
  adminController.postEditProduct
);

router.delete('/product/:productId', isAuth, isAd, adminController.deleteProduct);

router.get('/customer-orders', isAuth, isAd, adminController.getCustomerOrders);

router.get('/add-offer', isAuth, isAd, adminController.getAddOffer);

router.post(
  '/add-offer',
  [
    body('title')
      .isString()
      .isLength({ min: 3 })
      .trim(),
    body('description')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  isAuth, isAd,
  adminController.postAddOffer
);

router.get('/offers', isAuth, isAd, adminController.getOffers);

module.exports = router;
