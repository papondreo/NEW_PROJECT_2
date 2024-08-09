import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function OneBookPage() {
      // Извлекаем параметр id из URL, используя хук useParams
    const [id] = useParams()
      // Инициализируем состояние для хранения данных о книге, изначально null
    const [book, setBook] = useState(null);
     


  // Используем хук useEffect для выполнения побочного эффекта
  // В данном случае, выполняем запрос к API при загрузке компонента

    useEffect(() =>{
        axios.get(`api/books${id}`)// Отправляем запрос на сервер для получения данных о книге с указанным id
        .then(res => setBook(res.data)) // Устанавливаем полученные данные в состояние book
        .catch(err => console.log(err)) // Обрабатываем возможные ошибки
    },[id]);  // Хук срабатывает только при изменении id
    
    if(!book) return <div>Loading...</div>;
<div>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h2>{book.education}</h2>
                </div>
                <div className='col-3'>
                    <h5>{new Date(book.createdAt).toLocaleDateString('ru-RU')}</h5> // Отображаем дату создания в формате 'дд.мм.гггг'
                </div>
                <div className='col-12'>
                    <p>{book.body}</p> // Отображаем содержимое 
                </div>
                <Link to={`/books/${book.id}/update`} className="btn btn-primary">
                    Изменить
                </Link>
            </div>
        </div>
    </div>
   
}
