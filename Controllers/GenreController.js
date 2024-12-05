const pool = require("../db");

class GenreController {
  async getAllGenres(req, res) {
    try {
      const genre = await pool.query(`SELECT * FROM genres`);
      res.json(genre.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async createGenre(req, res) {
    const { genre } = req.body;
    try {
      const genre = await pool.query(
        `INSERT INTO genres (genre) VALUES ($1) RETURNING *`,
        [genre]
      );
      res.json(genre.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async updateGenre(req, res) {
    const id = parseInt(req.params.id, 10);
    const { genre } = req.body;
    try {
      const genre = await pool.query(
        `UPDATE authors SET genre = $1 WHERE id = $2 RETURNING *`,
        [genre, id]
      );
      res.json(genre.rows);
    } catch (error) {
      console.error("error", error);
    }
  }

  async deleteGenre(req, res) {
    const id = req.params.id;
    const genre = await pool.query(`DELETE FROM genres WHERE id = $2`, [id]);
    res.json(book.rows[0]);
  }
}

module.exports = new GenreController();
