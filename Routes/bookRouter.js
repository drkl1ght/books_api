const Router = require("express");
const router = new Router();
const BookController = require("../Controllers/BookController");

router.get("/book", BookController.getAllBooks);
router.post("/book", BookController.createBook);
router.put("/book/:id", BookController.updateBook);
router.delete("/book/:id", BookController.deleteBook);

module.exports = router;
