const express = require("express");
const { Book } = require('../../db/models');




const bookRouter = express.Router();

bookRouter.route('/')
.get(async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})
.post(async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



bookRouter
.route("/:id")
.delete(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  await book.destroy();
  res.sendStatus(204);
})
.get(async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  res.json(book);
})
.put(async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, cover } = req.body;

    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'book not found' });
    }

    book.title = title;
    book.description = description;
    book.cover = cover;

    await book.save();

    res.status(200).json(book); // Возвращаем обновленные данные
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = bookRouter;
