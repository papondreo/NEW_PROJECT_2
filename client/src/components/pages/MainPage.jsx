import axios from 'axios'
import { useEffect, useState } from 'react'
import BookCard from '../ul/BookCard'


export default function MainPage() {
    const[books,setBooks ] = useState([])

    useEffect(() => {
      axios.get('/api/books')
          .then(res => {
              setBooks(res.data)
          })
          .catch(err => console.error('Error fetching books:', err));
  }, []); // Пустой массив зависимостей предотвращает бесконечный цикл запросов

    const deleteHandler = (id) =>{
        axios.delete(`/api/books/${id}`)
        .then(res => {
            if (res.status === 200) { // Убедитесь, что запрос завершился успешно
              setBooks(prev => prev.filter(book => book.id !== id));
            } else {
              console.error('Error deleting books,:', res);
            }
          })
          .catch(err => console.error('Error deleting books:', err));
      };

  return (
    <div className='row'>
        {books.map((book) => (
            <div className='col-4' key={book.id}>
                < BookCard book={book} deleteHandler={deleteHandler}/>
            </div>
        ))}
        
    </div>
  )
}
