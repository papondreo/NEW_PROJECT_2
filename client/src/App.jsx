import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './components/pages/MainPage'
import OneBookPage from './components/pages/OneBookPage'
import UpdateBookPage from './components/pages/UpdateBookPage'
import AddBookPage from './components/pages/AddBookPage'
import SingUpPages from './components/pages/SingUpPages'
import axiosInstance, { setAccessToken } from '../axiosInstance';
import LoginPage from './components/pages/LoginPage'

function App() {
  const [user,setUser] = useState()
  
  useEffect(() => {
    axiosInstance('/tokens/refresh').then((res) => {
      const { user: newUser, accessToken } = res.data;
      setUser(newUser);
      setAccessToken(accessToken);
    }).catch(() => {
      setUser(null);
    });
   
  }, []);

  
  const handleSignup = async (formData) => {
    const res = await axiosInstance.post('/auth/signup', formData);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  };
  const loginHandler = async (dataForm)=>{
    
    const res = await axiosInstance.post('/auth/login', dataForm);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  }
  
  const logoutHandler = async () => {
    await axiosInstance('/auth/logout');
    setUser(null);
    setAccessToken('');
  };
  
  const routerConfig =[
   {
     element:<Layout logoutHandler={logoutHandler} user={user}/>,
     children:[
       {
         path:'/',
         element:<MainPage />
       },
       {
         path:'/book/:id/update',
         element:<OneBookPage/>
       },
       {
         path:'/books/:id',
         element:<UpdateBookPage />
       },
       {
         path:'/book/add',
         element:<AddBookPage />
       },
       {
        path:'/signup',
        element:<SingUpPages handleSignup={handleSignup}/>
      },
      {
        path: '/login',
        element: <LoginPage loginHandler={loginHandler}/>
      },
     ]
   }
  ];
 
  const router = createBrowserRouter(routerConfig)
 
   return  <RouterProvider router={router} />
 
 
 }
 
 export default App;
