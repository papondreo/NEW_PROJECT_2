import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddBookPage() {

const navigate = useNavigate();

const submitHandler = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    axios.post('/api/books', {
        title: e.target.title.value,
        description: e.target.description.value,
        cover: e.target.cover.value
    })
    .then(res => {
      console.log(res);
      if (res.status === 201) {
        navigate('/'); // Перенаправляем на главную страницу после успешного запроса
      }
    })
    .catch(err => console.log(err));
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='addEducation' className='form-label'>
          title
          </label>
          <input type='text' className='form-control' id='addEducation' name='title' />
        </div>
        <div className='mb-3'>
          <label htmlFor='addExperience' className='form-label'>
          description
          </label>
          <input type='text' className='form-control' id='addExperience' name='description' />
        </div>
        <div className='mb-3'>
          <label htmlFor='addSkills' className='form-label'>
          cover
          </label>
          <input type='text' className='form-control' id='addSkills' name='cover' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}
