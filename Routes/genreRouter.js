const Router = require("express");
const router = new Router();
const GenreController = require("../Controllers/GenreController");

router.get("/genre", GenreController.getAllGenres);
router.post("/genre", GenreController.createGenre);
router.put("/genre/:id", GenreController.updateGenre);
router.delete("/genre/:id", GenreController.deleteGenre);

module.exports = router;
