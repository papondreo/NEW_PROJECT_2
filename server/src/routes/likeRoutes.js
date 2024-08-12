const express = require('express');
const router = express.Router();
const { Like } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');


router.post('/books/:id/like', verifyAccessToken, async (req, res) => {
  try {
    const { id: bookId } = req.params;
    const userId = req.user.id; // Предполагаем, что пользователь авторизован и `req.user` содержит информацию о пользователе
    console.log(req.user);
    // Проверяем, что пользователь еще не лайкнул книгу
    const existingLike = await Like.findOne({ where: { userId, bookId } });
    if (existingLike) {
      return res.status(400).json({ message: 'You have already liked this book.' });
    }

    await Like.create({ userId, bookId });
    res.status(201).json({ message: 'Book liked successfully!' });
  } catch (error) {
   // console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
