
import { Link } from 'react-router-dom'
import axiosInstance from '../../../axiosInstance';
import { useState } from 'react';

export default function BookCard({book, deleteHandler}) {
  console.log(book)
  const [likes, setLikes] = useState(book.likes); // Добавляем состояние для лайков

  const likeHandler = async () => {
    try {
      console.log(axiosInstance);
      const response = await axiosInstance.post(`/books/${book.id}/like`);
      if (response.status === 201) {
        setLikes(prevLikes => prevLikes + 1); // Увеличиваем количество лайков на 1
      }
    } catch (err) {
      console.error('Error liking the book:', err);
    }
  };

  return (
    <div className="card">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">{book.title}</h5>
    <p className="card-text">Likes: {likes}</p> {/* Отображаем количество лайков */}
    <Link to={`/books/${book.id}`} className="btn btn-primary">
        Перейти
    </Link>
    <button onClick={() => deleteHandler(book.id)} className="btn btn-danger">
        Удалить
    </button>
    <button onClick={likeHandler} className="btn btn-success"> {/* Кнопка "Like" */}
          Like
    </button>
  </div>
</div>
  )
}
