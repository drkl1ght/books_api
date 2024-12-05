const pool = require("../db");

class AuthorController {
  async getAllAuthors(req, res) {
    try {
      const author = await pool.query(`SELECT * FROM authors`);
      res.json(author.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async createAuthor(req, res) {
    const { author_name, author_surname } = req.body;
    try {
      const author = await pool.query(
        `INSERT INTO authors (author_name, author_surname) VALUES ($1, $2) RETURNING *`,
        [author_name, author_surname]
      );
      res.json(author.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async updateAuthor(req, res) {
    const id = parseInt(req.params.id, 10);
    const { author_name, author_surname } = req.body;
    try {
      const author = await pool.query(
        `UPDATE authors SET author_name = $1, author_surname = $2 WHERE id = $3 RETURNING *`,
        [author_name, author_surname, id]
      );
      res.json(author.rows);
    } catch (error) {
      console.error("error", error);
    }
  }

  async deleteAuthor(req, res) {
    const id = req.params.id;
    const author = await pool.query(`DELETE FROM authors WHERE id = $3`, [id]);
    res.json(book.rows[0]);
  }
}

module.exports = new AuthorController();
