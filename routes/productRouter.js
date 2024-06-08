const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController')
// router
const router = require('express').Router()

//CREAR PRODUCTOS RUTA

router.post('/addProduct', productController.addProduct);
//LISTAR PRODUCTOS RUTA
router.get('/allProducts', productController.getAllProducts)


//const router = express.Router();

//router.post('/addProduct', productController.upload , productController.addProduct)


router.get('/published', productController.getPublishedProduct)

// Revisa Url y Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)


// get product Revisa
router.get('/getProductReviews/:id', productController.getProductReviews)


// Products del router


router.put('/update/:id', productController.updateProduct)
router.get('/get/:id', productController.getOneProduct)

router.delete('/delete/:id', productController.deleteProduct)

module.exports = router