const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("mydb.db");

// Create a table
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)"
  );
});

// Create a new user
router.post("/users", (req, res) => {
  const { name, email } = req.body;
  // console.log(req.body);
  const insertStmt = db.prepare(
    "INSERT INTO users (name, email) VALUES (?, ?)"
  );

  insertStmt.run(name, email, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "User created successfully" });
  });
  insertStmt.finalize();
});

// Get all users
router.get("/users", (req, res) => {
  db.all("SELECT id, name, email FROM users", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Get a single user by ID
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT id, name, email FROM users WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(row);
  });
});

// Update a user by ID
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updateStmt = db.prepare(
    "UPDATE users SET name = ?, email = ? WHERE id = ?"
  );
  updateStmt.run(name, email, id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "User updated successfully" });
  });
  updateStmt.finalize();
});

// Delete a user by ID
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const deleteStmt = db.prepare("DELETE FROM users WHERE id = ?");
  deleteStmt.run(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "User deleted successfully" });
  });
  deleteStmt.finalize();
});

module.exports = router;
