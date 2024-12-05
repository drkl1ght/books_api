const pool = require("../db");

class InStockController {
  async getAllInStock(req, res) {
    try {
      const instock = await pool.query(`SELECT * FROM in_stock`);
      res.json(instock.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async createInStock(req, res) {
    const { in_stock } = req.body;
    try {
      const instock = await pool.query(
        `INSERT INTO authors (in_stock) VALUES ($1) RETURNING *`,
        [in_stock]
      );
      res.json(instock.rows);
    } catch (error) {
      console.log(error);
    }
  }

  async updateInStock(req, res) {
    const id = parseInt(req.params.id, 10);
    const { in_stock } = req.body;
    try {
      const instock = await pool.query(
        `UPDATE instock SET in_stock = $1, WHERE id = $2 RETURNING *`,
        [in_stock, id]
      );
      res.json(instock.rows);
    } catch (error) {
      console.error("error", error);
    }
  }

  async deleteInStock(req, res) {
    const id = req.params.id;
    const instock = await pool.query(`DELETE FROM instock WHERE id = $2`, [id]);
    res.json(instock.rows[0]);
  }
}

module.exports = new InStockController();
