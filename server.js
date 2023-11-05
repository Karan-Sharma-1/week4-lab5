const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getphoneBooks,
  createphoneBook,
  getphoneBook,
  deletephoneBook,
  patchphoneBook,
  putphoneBook,
} = require("./controllers/phonebookControllers");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes
app.get("/", (req, res) => res.send("API Running!"));
// GET a single phonebook
app.get("/api/phonebooks/:id", getphoneBook);
// DELETE a phonebook
app.delete("/api/phonebooks/:id", deletephoneBook);
// Update phonebook using PATCH
app.patch("/api/phonebooks/:id", patchphoneBook);
// Update phonebook using PUT
app.put("/api/phonebooks/:id", putphoneBook);
// Add a new phonebook
app.post("/api/phonebooks", createphoneBook);
// GET all phonebooks
app.get("/api/phonebooks", getphoneBooks);
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
