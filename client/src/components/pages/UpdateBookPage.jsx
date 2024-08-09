import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', description: '', cover: '' });

  useEffect(() => {
    // Загружаем данные резюме при монтировании компонента
    const fetchBookData = async () => {
      try {
        const res = await axios.get(`/api/books/${id}`);  // Выполняем GET-запрос к API для получения данных о резюме
        setFormData({
          title: res.data.title,
          description: res.data.description,
          cover: res.data.cover,
        });  // Устанавливаем полученные данные в состояние
      } catch (err) {
        console.error(err);  // Обрабатываем возможные ошибки
      }
    };
    fetchBookData();  // Вызываем функцию загрузки данных
  }, [id]);  // Хук срабатывает только при изменении id

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/books/${id}`, formData);  // Выполняем PUT-запрос к API для обновления данных о резюме
      navigate(`/books/${id}`);  // Перенаправляем пользователя на страницу резюме после успешного обновления
    } catch (err) {
      console.error(err);  // Обрабатываем возможные ошибки
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;  // Извлекаем имя и значение измененного поля
    setFormData({ ...formData, [name]: value });  // Обновляем состояние формы
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='editEducation' className='form-label'>
          title
          </label>
          <input
            type='text'
            className='form-control'
            id='editEducation'
            name='title'
            value={formData.title}  // Значение поля ввода устанавливается из состояния
            onChange={handleInputChange}  // Обработчик изменения поля ввода
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='editExperience' className='form-label'>
          description
          </label>
          <input
            type='text'
            className='form-control'
            id='editExperience'
            name='description'
            value={formData.description}  // Значение поля ввода устанавливается из состояния
            onChange={handleInputChange}  // Обработчик изменения поля ввода
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='editSkills' className='form-label'>
          cover
          </label>
          <input
            type='text'
            className='form-control'
            id='editSkills'
            name='cover'
            value={formData.cover}  // Значение поля ввода устанавливается из состояния
            onChange={handleInputChange}  // Обработчик изменения поля ввода
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}