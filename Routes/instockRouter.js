const Router = require("express");
const router = new Router();
const InStockController = require("../Controllers/InStockController");

router.get("/instock", InStockController.getAllInStock);
router.post("/instock", InStockController.createInStock);
router.put("/instock/:id", InStockController.updateInStock);
router.delete("/instock/:id", InStockController.deleteInStock);

module.exports = router;
