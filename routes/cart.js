const router = require ('express').Router();
const cartController = require('../controllers/cartController');

router.get("/find/:id", cartController.getcart);
router.post("/", cartController.addTocart);
router.delete("/:cartItemId", cartController.deletecart);
router.post("/quantity", cartController.decrementCartItem);

module.exports = router;