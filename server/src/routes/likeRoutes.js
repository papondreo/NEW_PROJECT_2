const express = require('express');
const router = express.Router();
const { Like } = require('../../db/models');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/books/:id/like', authMiddleware, async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const userId = req.user.id; // Предполагаем, что пользователь авторизован и `req.user` содержит информацию о пользователе

    // Проверяем, что пользователь еще не лайкнул книгу
    const existingLike = await Like.findOne({ where: { userId, bookId } });
    if (existingLike) {
      return res.status(400).json({ message: 'You have already liked this book.' });
    }

    await Like.create({ userId, bookId });
    res.status(201).json({ message: 'Book liked successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
