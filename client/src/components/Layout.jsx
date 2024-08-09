import { Outlet } from 'react-router-dom'
import React from 'react'
import NavBar from './ul/NavBar'
export default function Layout({user,logoutHandler}) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <NavBar logoutHandler={logoutHandler} user={user}/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <Outlet />
            </div>
        </div>
    </div>
  );
}