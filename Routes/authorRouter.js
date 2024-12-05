const Router = require("express");
const router = new Router();
const AuthorController = require("../Controllers/AuthorController");

router.get("/author", AuthorController.getAllAuthors);
router.post("/author", AuthorController.createAuthor);
router.put("/author/:id", AuthorController.updateAuthor);
router.delete("/author/:id", AuthorController.deleteAuthor);

module.exports = router;
