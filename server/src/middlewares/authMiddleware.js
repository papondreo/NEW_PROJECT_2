const jwt = require('jsonwebtoken');
const { User } = require('../../db/models');

const authMiddleware = async (req, res, next) => {
  try {
    // Извлекаем токен из заголовков или куки
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Проверяем и декодируем токен
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Ищем пользователя по ID из токена
    const user = await User.findByPk(decoded.user.id);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Добавляем информацию о пользователе в запрос
    req.user = user;
    next(); // Передаем управление следующему middleware
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;