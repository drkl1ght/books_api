async function createTables(pool) {
  try {
    const createAuthorsTable = `
            CREATE TABLE IF NOT EXISTS authors (
                id SERIAL PRIMARY KEY,
                author_name VARCHAR(100) NOT NULL,
                author_surname VARCHAR(100) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
    const createGenresTable = `         
            CREATE TABLE IF NOT EXISTS genres (
                id SERIAL PRIMARY KEY,
                genre VARCHAR(100) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
    const createInStockTable = `
            CREATE TABLE IF NOT EXISTS instock (
                id SERIAL PRIMARY KEY,
                in_stock INT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
    const createBooksTable = `
            CREATE TABLE IF NOT EXISTS books (
                id SERIAL PRIMARY KEY,
                book_name VARCHAR(100) NOT NULL,
                author INTEGER REFERENCES authors(id) ON DELETE CASCADE,
                in_stock INT REFERENCES instock(id) ON DELETE CASCADE,
                genre VARCHAR(100) REFERENCES genres(id) ON DELETE CASCADE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`;
    await pool.query(createAuthorsTable);
    console.log("Authors table created.");
    await pool.query(createGenresTable);
    console.log("Genres table created.");
    await pool.query(createInStockTable);
    console.log("InStock table created.");
    await pool.query(createBooksTable);
    console.log("Book table created.");
  } catch (error) {
    console.error("Error creating tables:", error.message);
  }
}

module.exports = createTables;
