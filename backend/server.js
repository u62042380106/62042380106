const port = 1001;
const express = require("express");
const cors = require("cors");

const mysql = require("mysql");
const app = express();

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'student',
})


app.get("/", (req, res) => {
  const sql = "SELECT * FROM list";
  db.query(sql, (err, data) => {
    if(err) return res.json(err);
    return res.json(data);
  })
})

app.post("/create", (req, res) => {
  const sql = "INSERT INTO list (`Name`, `Code`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.code
  ]
  db.query(sql,[values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.put("/edit/:id", (req, res) => {
  const sql = "update list set `Name` = ?, `Code` = ? where ID = ?";
  const values = [
    req.body.name,
    req.body.code
  ]
  const id = req.params.id;

  db.query(sql,[...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})

app.delete("/home/:id", (req, res) => {
  const sql = "DELETE FROM list WHERE ID = ?";
  const id = req.params.id;

  db.query(sql,[id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  })
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})