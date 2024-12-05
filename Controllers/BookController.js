const pool = require("../db");

class BookController {
  async getAllBooks(req, res) {
    try {
      const book = await pool.query(`SELECT * FROM books`);
      res.json(book.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async createBook(req, res) {
    const { book_name, author, in_stock, genre } = req.body;
    try {
      const book = await pool.query(
        `INSERT INTO books (book_name, author, in_stock, genre) VALUES ($1, $2, $3, $4) RETURNING *`,
        [book_name, author, in_stock, genre]
      );
      res.json(book.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async updateBook(req, res) {
    const id = parseInt(req.params.id, 10);
    const { book_name, author, in_stock, genre } = req.body;
    try {
      const book = await pool.query(
        `UPDATE books SET book_name = $1, author = $2, in_stock = $3, genre = $4 WHERE id = $5 RETURNING *`,
        [book_name, author, in_stock, genre, id]
      );
      res.json(book.rows);
    } catch (error) {
      console.error("error", error);
    }
  }

  async deleteBook(req, res) {
    const id = req.params.id;
    const book = await pool.query(`DELETE FROM books WHERE id = $5`, [id]);
    res.json(book.rows[0]);
  }
}

module.exports = new BookController();
