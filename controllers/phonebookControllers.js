const phoneBook = require("../models/phonebookModel");

// Create a new phonebook
const createphoneBook = async (req, res) => {
  try {
    const { name, phoneNumber, email, address } = req.body;
    if (!name || !phoneNumber || !email || !address) {
      return res
        .status(400)
        .json({ error: "All fields (name, phonenumber, email, address) are required" });
    }

    const newphoneBook = new phoneBook({ name, phoneNumber, email, address });
    const savedphoneBook = await newphoneBook.save();

    res.status(201).json(savedphoneBook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all phonebooks
const getphoneBooks = async (req, res) => {
  try {
    const phonebooks = await phoneBook.find();
    res.json(phonebooks);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single phonebook by ID
const getphoneBook = async (req, res) => {
  try {
    const phonebook = await phoneBook.findById(req.params.id);
    if (!phonebook) {
      return res.status(404).json({ error: "PhoneBook not found" });
    }
    res.json(phonebook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a phonebook by ID
const deletephoneBook = async (req, res) => {
  try {
    const phonebook = await phoneBook.findByIdAndDelete(req.params.id);
    if (!phonebook) {
      return res.status(404).json({ error: "PhoneBook not found" });
    }
    res.json({ message: "PhoneBook deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single phonebook by ID
const patchphoneBook = async (req, res) => {
  try {
    const phonebook = await phoneBook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!phonebook) {
      return res.status(404).json({ error: "phoneBook not found" });
    }

    res.json(phoneBook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single phonebook by ID
const putphoneBook = async (req, res) => {
  try {
    const phoneBook = await phoneBook.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!phoneBook) {
      return res.status(404).json({ error: "Phonebook not found" });
    }

    res.json(phoneBook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createphoneBook,
  getphoneBooks,
  getphoneBook,
  deletephoneBook,
  patchphoneBook,
  putphoneBook,
};